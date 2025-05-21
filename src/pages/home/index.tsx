import { useEffect, useState } from "react";
import { Card, Button, Tag, Divider, Space, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface TagItem {
  tagId: string;
  tagName: string;
  label: string;
}

async function fetchTags(): Promise<TagItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { tagId: "1", tagName: "温柔", label: "性格" },
        { tagId: "2", tagName: "幽默", label: "性格" },
        { tagId: "3", tagName: "篮球", label: "爱好" },
        { tagId: "4", tagName: "足球", label: "爱好" },
        { tagId: "5", tagName: "音乐", label: "爱好" }
      ]);
    }, 500);
  });
}

const IndexPage = () => {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [groupedTags, setGroupedTags] = useState<Record<string, TagItem[]>>({});
  const [selectedTagIds, setSelectedTagIds] = useState<Set<string>>(new Set());
  const [clusters, setClusters] = useState<TagItem[][]>([]);

  // 加载标签并按 label 分类
  useEffect(() => {
    fetchTags().then((res) => {
      setTags(res);
      const grouped = res.reduce((acc, tag) => {
        if (!acc[tag.label]) acc[tag.label] = [];
        acc[tag.label].push(tag);
        return acc;
      }, {} as Record<string, TagItem[]>);
      setGroupedTags(grouped);
    });
  }, []);

  // 选中/取消选中标签
  const toggleTag = (tagId: string) => {
    setSelectedTagIds((prev) => {
      const next = new Set(prev);
      if (next.has(tagId)) next.delete(tagId);
      else next.add(tagId);
      return next;
    });
  };

  // 根据 tagId 获取 tag 实体
  const getTagById = (id: string) => tags.find((t) => t.tagId === id);

  // 保存聚类
  const handleSaveCluster = () => {
    if (selectedTagIds.size === 0) {
      message.warning("请先选择标签");
      return;
    }
    const newCluster = Array.from(selectedTagIds)
      .map(getTagById)
      .filter(Boolean) as TagItem[];
    setClusters([...clusters, newCluster]);
    setSelectedTagIds(new Set());
  };

  // 取消某个聚类
  const handleCancelCluster = (index: number) => {
    const newClusters = [...clusters];
    newClusters.splice(index, 1);
    setClusters(newClusters);
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="标签分类" bordered={false}>
        {Object.entries(groupedTags).map(([label, items]) => (
          <div key={label} style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 500 }}>{label}</div>
            <Space wrap>
              {items.map((tag) => (
                <Tag
                  key={tag.tagId}
                  color={selectedTagIds.has(tag.tagId) ? "blue" : "default"}
                  onClick={() => toggleTag(tag.tagId)}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  {tag.tagName}
                </Tag>
              ))}
            </Space>
          </div>
        ))}

        <Divider />
        <Button
          type="primary"
          onClick={handleSaveCluster}
          disabled={selectedTagIds.size === 0}
        >
          保存为聚类
        </Button>
      </Card>

      {clusters.length > 0 && (
        <Card title="已保存的聚类" style={{ marginTop: 24 }}>
          {clusters.map((cluster, index) => (
            <div key={index} style={{ marginBottom: 12 }}>
              <Space wrap>
                {cluster.map((tag) => (
                  <Tag key={tag.tagId} color="processing">
                    {tag.tagName}
                  </Tag>
                ))}
                <Tag
                  color="red"
                  onClick={() => handleCancelCluster(index)}
                  style={{ cursor: "pointer" }}
                  icon={<CloseOutlined />}
                >
                  取消聚类
                </Tag>
              </Space>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default IndexPage;
