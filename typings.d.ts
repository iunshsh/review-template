import "umi/typings";

declare module "umi" {
  interface IClientRoute {
    icon?: React.ComponentType; // 添加icon属性类型定义
  }
}
