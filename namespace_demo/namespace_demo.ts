// TypeScript 命名空间
// 已过时，不推荐使用，使用 modules 代替

// 命名空间一个最明确的目的就是解决重名问题
// 命名空间定义了标识符的可见范围
// 一个标识符可在多个命名空间中定义，它在不同命名空间中的含义是互不相干的
// 这样，在一个新的命名空间中可定义任何标识符
// 它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他命名空间中

// TypeScript 中命名空间使用 namespace 来定义，语法格式如下
// namespace SomeNameSpaceName { 
//    export interface ISomeInterfaceName {      }  
//    export class SomeClassName {      }  
// }

// 以上定义了一个命名空间 SomeNameSpaceName
// 如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字

// 要在另外一个命名空间调用，需要使用完全限定名，语法格式为：
// SomeNameSpaceName.SomeClassName;

// 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
// /// <reference path = "SomeFileName.ts" />


// 以下实例演示了命名空间的使用，定义在不同文件中：
// IShape.ts 文件代码：

// Circle.ts 文件代码：

// Triangle.ts 文件代码：

// TestShape.ts 文件代码

// 最新版 TypeScript 中，推荐使用模块（modules）而不是命名空间（namespaces）
// 模块提供了更好的代码组织和重用方式，同时也避免了命名空间可能带来的问题
// 在 TypeScript 中，可以使用 import 和 export 关键字来导入和导出模块

// 在最新版 TypeScript 中，需要将以上四个文件中的代码都放置在同一个文件下，才能正常工作


// 嵌套命名空间
// InvoiceTest.ts
// 在最新版 TypeScript 中，需要将所有代码放到一个文件中
















