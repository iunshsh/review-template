// src/routes.ts
import { DesktopOutlined, JavaScriptOutlined } from "@ant-design/icons";

export default [
  // { path: "/login", component: "@/pages/login", layout: false },
  {
    path: "/",
    component: "@/pages/Home",
    name: "首页",
    icon: "DesktopOutlined"
  },
  {
    path: "/jsTemplate",
    name: "jsModules",
    icon: "JavaScriptOutlined",
    routes: [
      {
        path: "/jsTemplate/moduleA",
        component: "@/pages/JsTemplate/ModuleA",
        name: "模块A"
      },
      {
        path: "/jsTemplate/moduleB",
        component: "@/pages/JsTemplate/ModuleB",
        name: "模块B"
      }
    ]
  },

  { path: "/*", component: "@/pages/404", layout: false }
];
