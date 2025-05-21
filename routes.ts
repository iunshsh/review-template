// src/routes.ts
import { DesktopOutlined, JavaScriptOutlined } from "@ant-design/icons";

export default [
  { path: "/login", component: "@/pages/login", layout: false },
  {
    path: "/",
    component: "@/pages/home",
    name: "首页",
    icon: "DesktopOutlined"
  },
  {
    path: "/jsTemplate",
    component: "@/pages/JsTemplate",
    name: "jsModules",
    icon: "JavaScriptOutlined"
  },

  { path: "/*", component: "@/pages/404", layout: false }
];
