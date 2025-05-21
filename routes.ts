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
        path: "/jsTemplate/BasicGrammar",
        component: "@/pages/JsTemplate/BasicGrammar",
        name: "基础语法"
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
