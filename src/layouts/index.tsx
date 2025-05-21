import { useAppData, Outlet, useLocation, history } from "umi";
import { Layout as LayoutContainer, Menu, MenuProps, theme } from "antd";
import * as Icons from "@ant-design/icons";

const { Header, Sider, Content } = LayoutContainer;

type MenuItem = Required<MenuProps>["items"][number] & {
  icon?: React.ReactNode;
};

const Layout = () => {
  const { clientRoutes } = useAppData();
  const location = useLocation();

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const getIcon = (iconName?: string) => {
    if (!iconName) return undefined;
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent /> : undefined;
  };

  const rootRoute = clientRoutes.find((route) => route.path === "/");
  const menuItems: MenuItem[] =
    rootRoute?.routes
      ?.filter((r) => r.path && r.path !== "/login")
      .map((r) => ({
        key: String(r.path),
        label:
          typeof (r as any).name === "string" ? (r as any).name : "默认菜单",
        type: undefined,
        icon: getIcon((r as any).icon) // 这里转换
      })) ?? [];

  return (
    <LayoutContainer style={{ height: "100vh" }}>
      <Sider collapsible theme="light">
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={(info: { key: string }) => history.push(info.key)}
          items={menuItems}
        />
      </Sider>
      <LayoutContainer>
        {/* <Header style={{ background: colorBgContainer }}>管理后台</Header> */}
        <Content
          style={{
            margin: "24px",
            padding: 24,
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export default Layout;
