// TypeScript 工具类型

// 工具类型（Utility Types）是 TypeScript 内置的一系列高级类型
// 它们可以帮助开发者快速创建和转换类型，提高代码的可复用性和类型安全性
// 工具类型本质上是泛型类型，通过映射类型和条件类型实现

// TypeScript 工具类型
// Partial<T> - 属性全部可选
// Required<T> - 属性全部必填
// Readonly<T> - 属性全部只读
// Pick<T,K> - 选择指定属性
// Omit<T,K> - 排除指定属性
// Record<K,T> - 构造对象类型

// 为什么需要工具类型?
// 1. 提高代码的可复用性
// 2. 增强类型安全性
// 3. 简化复杂类型的定义和使用
// 4. 提供更灵活的类型操作方式

// 在实际的 TypeScript 开发中，我们经常需要基于现有类型创建新的类型
// 手动创建这些类型不仅繁琐，而且容易出错
// 工具类型提供了一种声明式的方式来转换和创建类型，大大提高了开发效率

// 概念说明：工具类型是 TypeScript 预定义的一系列泛型类型
// 它们使用映射类型和条件类型来实现类型的转换和生成


// Partial<T> - 属性全部可选
// Partial 将类型 T 的所有属性设置为可选
// 这在创建部分更新对象或处理表单数据时非常有用

// 定义用户接口，包含必填属性
// interface User {
//     // 用户 ID
//     id: number;
//     // 用户名
//     name: string;
//     // 用户邮箱
//     email: string;
// }

// Partial：将所有属性变为可选
// 转换后的类型所有属性都是可选的
// type PartialUser = Partial<User>;

// 使用 PartialUser 类型
// 可以只提供部分属性，不需要全部提供
// const user: PartialUser = { name: "Alice" };

// console.log("部分用户: " + JSON.stringify(user));

// 应用场景：Partial 常用于更新对象数据
// 例如：只更新用户的一部分信息时，不需要传入完整的用户对象


// Required<T> - 属性全部必填
// Required 与 Partial 相反，将所有可选属性设置为必填
// 当需要确保对象包含所有属性时使用

// 定义配置接口，属性都是可选的
// interface Config {
//     // 服务器地址
//     host?: string;
//     // 端口号
//     port?: number;
// }

// Required：将所有可选属性变为必填
// 转换后的类型所有属性都是必填的
// type RequiredConfig = Required<Config>;

// 使用 RequiredConfig 类型
// 必须提供所有属性
// const config: RequiredConfig = { host: "localhost", port: 8080 };

// console.log("配置: " + JSON.stringify(config));

// 说明：Required 不仅移除可选属性（?），还会移除 readonly 修饰符

// Readonly<T> - 只读属性
// Readonly 将所有属性设置为只读
// 创建后不允许修改对象时非常有用
// 允许初始化

// 定义用户接口
// interface User {
//     // 用户名
//     name: string;
//     // 用户年龄
//     age: number;
// }

// Readonly：将所有属性变为只读
// 转换后的类型所有属性都不能修改
// type ReadonlyUser = Readonly<User>;

// 创建只读用户对象
// const user: ReadonlyUser = { name: "Alice", age: 25 };

// 尝试修改只读属性会报错
// user.name = "Bob"; // 错误：只读属性不能修改
// error TS2540: Cannot assign to 'name' because it is a read-only property

// console.log("只读用户: " + JSON.stringify(user));

// 应用场景：Readonly 常用于定义配置对象、枚举值映射等不希望被修改的数据


// Pick<T, K> - 选择指定属性
// Pick 从类型 T 中选择指定的属性 K 组成新类型
// 当你只需要某个类型的部分属性时使用

// 定义完整的用户接口
// interface User {
//     // 用户 ID
//     id: number;
//     // 用户名
//     name: string;
//     // 用户邮箱
//     email: string;
//     // 用户密码
//     password: string;
// }

// Pick：选择指定的属性组成新类型
// 从 User 中选择 id 和 name 属性
// type UserBasicInfo = Pick<User, "id" | "name">;

// 使用选择后的类型
// const user: UserBasicInfo = { id: 1, name: "Alice" };

// console.log("用户基本信息: " + JSON.stringify(user));

// 对比：Pick 和 Partial 结合使用，可以创建只包含部分可选属性的类型


// Omit<T, K> - 排除指定属性
// Omit 从类型 T 中排除指定的属性 K，返回剩余属性组成的新类型
// 与 Pick 相反，用于删除不需要的属性

// 定义完整的用户接口
// interface User {
//     // 用户 ID
//     id: number;
//     // 用户名
//     name: string;
//     // 用户邮箱
//     email: string;
//     // 用户密码
//     password: string;
// }

// Omit：排除指定的属性
// 从 User 中排除 password 属性
// type UserWithoutPassword = Omit<User, "password">;
// type UserWithoutPassword = Omit<User, "password" | "email">;

// 使用排除后的类型
// const user: UserWithoutPassword = { id: 1, name: "Alice", email: "a@b.com" };
// const user: UserWithoutPassword = { id: 1, name: "Alice" };

// console.log("无密码用户: " + JSON.stringify(user));

// 提示：Omit 是 Pick 的反向操作
// 当你需要排除少数属性时用 Omit，需要选择少数属性时用 Pick

// Record<K, T> - 构造对象类型
// Record 构造一个对象类型，键的类型为 K，值的类型为 T
// 常用于创建键值对映射、字典类型等

// 定义角色类型
// type Role = "admin" | "user" | "guest";

// Record：构造对象类型
// 键为 Role 类型，值为字符串数组类型
// type RolePermissions = Record<Role, string[]>;

// 使用 Record 创建权限映射
// const permissions: RolePermissions = {
//     // 管理员拥有所有权限
//     admin: ["read", "write", "delete"],
//     // 普通用户拥有读写权限
//     user: ["read", "write"],
//     // 访客只有读权限
//     guest: ["read"]
// };

// console.log("管理员权限: " + permissions.admin);
// console.log("访客权限: " + permissions.guest);
// console.log("用户权限: " + permissions.user);

// 应用场景：Record 常用于创建配置映射、状态映射、权限映射等需要根据键快速查找值的场景

// Exclude<T, U> - 排除类型
// Exclude 从类型 T 中排除可以赋值给类型 U 的类型
// 主要用于联合类型，排除特定的类型成员

// 定义联合类型，包含 a、b、c、d
// type T = "a" | "b" | "c" | "d";

// Exclude：从 T 中排除指定类型
// 排除 "a"、"b"、"c"，只保留 "d"
// type NonABC = Exclude<T, "a" | "b" | "c">;

// 使用排除后的类型，只能赋值 "d"
// const value: NonABC = "d";

// console.log("值: " + value);

// 说明：Exclude 的原理是：如果 T 中的某个类型可以赋值给 U，就从 T 中移除它

// Extract<T, U> - 提取类型
// Extract 与 Exclude 相反，从类型 T 中提取可以赋值给类型 U 的类型
// 用于筛选联合类型中的特定成员

// 定义混合联合类型，包含字符串和数字
// type T = "a" | "b" | "c" | 1 | 2 | 3;

// Extract：从 T 中提取指定类型
// 提取所有字符串类型："a"、"b"、"c"
// type Letters = Extract<T, string>;

// 使用提取后的类型
// const letter: Letters = "a";

// console.log("字母: " + letter);

// 对比：Extract 和 Exclude 是互补的。Extract(T, U) 等价于 Exclude(T, Exclude<T, U>)


// NonNullable<T> - 排除空值
// NonNullable 从类型 T 中排除 null 和 undefined
// 确保类型不包含空值时使用

// 定义混合类型，包含字符串、null、undefined、数字
// type T = string | null | undefined | number;

// NonNullable：排除 null 和 undefined
// 转换后只保留 string 和 number
// type NotNull = NonNullable<T>;

// 使用非空类型
// let value: NotNull = "hello";
// value = 42;

// 尝试赋值 null 会报错
// value = null; // 错误：不能赋值 null
// error TS2322: Type 'null' is not assignable to type 'NotNull'

// console.log("值: " + value);

// 说明：NonNullable<T> 等价于 Exclude<T, null | undefined>

// ReturnType<T> - 获取返回类型
// ReturnType 获取函数类型 T 的返回类型
// 常用于从已存在的函数中提取返回类型

// 定义获取用户的函数
// function getUser() {
//     return { name: "Alice", age: 25 };
// }

// 定义获取配置的函数
// function getConfig() {
//     return { host: "localhost", port: 8080 };
// }

// ReturnType：获取函数的返回类型
// 提取 getUser 函数的返回类型
// type UserType = ReturnType<typeof getUser>;
// 提取 getConfig 函数的返回类型
// type ConfigType = ReturnType<typeof getConfig>;

// 使用提取的返回类型创建对象
// const user: UserType = { name: "Bob", age: 30 };
// const config: ConfigType = { host: "example.com", port: 3000 };

// console.log("用户: " + JSON.stringify(user));
// console.log("配置: " + JSON.stringify(config));


// 提示：ReturnType<T> 中的 T 必须是函数类型
// 可以使用 typeof 获取函数的类型

// 注意事项
// 工具类型都是泛型：使用时应传入具体的类型参数
// 只读和可选：工具类型可以组合使用，如 Partial<Readonly<T>>
// 内置类型：这些工具类型都是 TypeScript 内置的，无需安装
// 自定义工具类型：可以基于映射类型和条件类型创建自定义工具类型 (请参阅映射类型和条件类型的相关文档)

// 进阶：如果内置工具类型不满足需求，可以参考 TypeScript 源码自行实现自定义工具类型


// 总结
// TypeScript 工具类型是类型系统的重要组成部分

// 内置工具类型提供了丰富的类型操作能力
// 涵盖了属性可选性、必填性、只读性、属性选择、属性排除、对象构造、类型过滤、
// 非空类型提取以及函数返回类型获取等方面

// Partial<T>：将所有属性变为可选
// Required<T>：将所有属性变为必填
// Readonly<T>：将所有属性变为只读
// Pick<T,K>：选择指定属性
// Omit<T,K>：排除指定属性
// Record<K,T>：构造对象类型
// Exclude/Extract：类型过滤
// NonNullable：排除 null 和 undefined
// ReturnType：获取函数返回类型

// 最佳实践：善用工具类型可以使代码更加类型安全，减少重复的类型定义，提高代码可维护性




