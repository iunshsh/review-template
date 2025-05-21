import React, { useState } from "react";
import {
  Tabs,
  Input,
  Button,
  Form,
  DatePicker,
  Select,
  message,
  Space
} from "antd";
import { CopyOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

type TaskData = {
  name: string;
  type: string;
  timeRange: [string, string];
};

const DEFAULT_TASK: TaskData = {
  name: "新任务",
  type: "code",
  timeRange: [
    dayjs().tz("America/Los_Angeles").toISOString(),
    dayjs().tz("America/Los_Angeles").add(1, "day").toISOString()
  ]
};

const TaskTabs: React.FC = () => {
  const [tasks, setTasks] = useState<Record<string, TaskData>>({
    "tab-1": { ...DEFAULT_TASK, name: "任务1" }
  });
  const [activeKey, setActiveKey] = useState("tab-1");
  const [tabIndex, setTabIndex] = useState(2);
  const [formMap] = useState<Record<string, any>>({});

  const addTab = () => {
    if (Object.keys(tasks).length >= 10) {
      return message.warning("最多只能添加 10 个任务");
    }
    const newKey = `tab-${tabIndex}`;
    const newName = `任务${tabIndex}`;
    setTasks({
      ...tasks,
      [newKey]: { ...DEFAULT_TASK, name: newName }
    });
    setActiveKey(newKey);
    setTabIndex(tabIndex + 1);
  };

  const getCopyName = (base: string) => {
    let index = 1;
    let newName = `${base}-copy`;
    const names = Object.values(tasks).map((t) => t.name);
    while (names.includes(newName)) {
      newName = `${base}-copy${index}`;
      index++;
    }
    return newName;
  };

  const copyTab = () => {
    if (Object.keys(tasks).length >= 10) {
      return message.warning("最多只能添加 10 个任务");
    }
    const original = tasks[activeKey];
    const base = original.name.replace(/-copy\d*$/, "").replace(/-copy$/, "");
    const newName = getCopyName(base);
    const newKey = `tab-${tabIndex}`;
    setTasks({
      ...tasks,
      [newKey]: { ...original, name: newName }
    });
    setActiveKey(newKey);
    setTabIndex(tabIndex + 1);
  };

  const removeTab = (key: string) => {
    const newTasks = { ...tasks };
    delete newTasks[key];
    delete formMap[key];
    setTasks(newTasks);
    const keys = Object.keys(newTasks);
    if (activeKey === key && keys.length > 0) {
      setActiveKey(keys[0]);
    }
  };

  const handleChange = (key: string, field: keyof TaskData, value: any) => {
    setTasks({
      ...tasks,
      [key]: {
        ...tasks[key],
        [field]: value
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const allValues: Record<string, TaskData> = {};
      for (const key of Object.keys(tasks)) {
        const values = await formMap[key].validateFields();
        const [start, end] = values.timeRange;
        allValues[key] = {
          name: values.name,
          type: values.type,
          timeRange: [
            dayjs(start).tz("America/Los_Angeles").toISOString(),
            dayjs(end).tz("America/Los_Angeles").toISOString()
          ]
        };
      }

      console.log("提交数据:", allValues);
      message.success("提交成功，请查看控制台输出");
    } catch (error) {
      message.error("请完善所有任务信息后再提交");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Space
        style={{
          marginBottom: 8,
          justifyContent: "space-between",
          display: "flex"
        }}
      >
        <span style={{ fontWeight: 500 }}>任务 Tabs</span>
        <Button icon={<CopyOutlined />} onClick={copyTab}>
          Copy
        </Button>
      </Space>

      <Tabs
        type="editable-card"
        activeKey={activeKey}
        onChange={setActiveKey}
        onEdit={(targetKey, action) => {
          if (action === "add") addTab();
          if (action === "remove") removeTab(targetKey as string);
        }}
      >
        {Object.entries(tasks).map(([key, task]) => (
          <TabPane tab={task.name} key={key}>
            <Form
              layout="vertical"
              initialValues={{
                name: task.name,
                type: task.type,
                timeRange: [
                  dayjs(task.timeRange[0]).tz("Asia/Shanghai"),
                  dayjs(task.timeRange[1]).tz("Asia/Shanghai")
                ]
              }}
              ref={(form) => {
                if (form) formMap[key] = form;
              }}
            >
              <Form.Item
                label="任务名称"
                name="name"
                rules={[{ required: true, message: "请输入任务名称" }]}
              >
                <Input
                  onChange={(e) => handleChange(key, "name", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="任务类型"
                name="type"
                rules={[{ required: true, message: "请选择任务类型" }]}
              >
                <Select onChange={(value) => handleChange(key, "type", value)}>
                  <Select.Option value="code">code</Select.Option>
                  <Select.Option value="design">design</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="任务时间范围"
                name="timeRange"
                rules={[{ required: true, message: "请选择时间范围" }]}
              >
                <RangePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  onChange={(dates) => {
                    if (dates) {
                      handleChange(key, "timeRange", [
                        dates[0].tz("America/Los_Angeles").toISOString(),
                        dates[1].tz("America/Los_Angeles").toISOString()
                      ]);
                    }
                  }}
                />
              </Form.Item>
            </Form>
          </TabPane>
        ))}
      </Tabs>

      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 16 }}>
        提交
      </Button>
    </div>
  );
};

export default TaskTabs;
