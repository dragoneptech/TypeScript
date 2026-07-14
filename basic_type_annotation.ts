// 基础类型：number、string、boolean、null、undefined、symbol、bigint


// number
let age: number = 30;
// console.log(`I am ${age} years old.`); // Output: I am 30 years old.
let pi: number = 3.14;
// console.log(`The value of pi is approximately ${pi.toFixed(2)}.`);
// Output: The value of pi is approximately 3.14.


// string
let message: string = "Hello, TypeScript!";
// console.log(message); // Output: Hello, TypeScript!


// template string
let varname: string = "Alice";
let greeting: string = `Hello, ${varname}! Welcome to TypeScript.`;
// console.log(greeting); // Output: Hello, Alice! Welcome to TypeScript.


// boolean
let isStudent: boolean = true;
let hasGraduated: boolean = false;
// console.log(`Is student: ${isStudent}`); // Output: Is student: true
// console.log(`Has graduated: ${hasGraduated}`); // Output: Has graduated: false


// null and undefined
let emptyValue: null = null;
// console.log(`The value of emptyValue is: ${emptyValue}`);
// Output: The value of emptyValue is: null
// console.log(`The type of null is: ${typeof null}`);
// Output: The type of null is: object
let notAssigned: undefined = undefined;
// console.log(`The value of notAssigned is: ${notAssigned}`);
// Output: The value of notAssigned is: undefined
// console.log(`The type of undefined is: ${typeof undefined}`);
// Output: The type of undefined is: undefined
let nullableString: string | null = null;  // This variable can be either a string or null
// console.log(`The value of nullableString is: ${nullableString}`);
// Output: The value of nullableString is: null
nullableString = "Now I have a value!";
// console.log(`The value of nullableString is: ${nullableString}`);
// Output: The value of nullableString is: Now I have a value!
let optionalNumber: number | undefined = undefined; // This variable can be either a number or undefined
// console.log(`The value of optionalNumber is: ${optionalNumber}`);
// Output: The value of optionalNumber is: undefined
optionalNumber = 42;
// console.log(`The value of optionalNumber is: ${optionalNumber}`);
// Output: The value of optionalNumber is: 42


// set --strictNullChecks (default & optional)
// tsc command with --strictNullChecks parameter ensures that
// null and undefined are not assignable to other types unless explicitly specified.
// This helps catch potential null or undefined errors at compile time,
// making the code safer and more robust.
let x: number;
x = 5; // This is fine
// console.log(`The value of x is: ${x}`); // Output: The value of x is: 5
// x = null; // Error: Type 'null' is not assignable to type 'number'
// x = undefined; // Error: Type 'undefined' is not assignable to type 'number'


// unset --strictNullChecks
// tsc --strictNullChecks false
let y: number;
y = 5;
// console.log(`The value of y is: ${y}`); // Output: The value of y is: 5
// y = null; // This is allowed
// console.log(`The value of y is: ${y}`); // Output: The value of y is: null
// y = undefined; // This is also allowed
// console.log(`The value of y is: ${y}`); // Output: The value of y is: undefined


// set --strictNullChecks
let z: number | null | undefined;
z = 10;
// console.log(`The value of z is: ${z}`); // Output: The value of z is: 10
z = null; // This is allowed
// console.log(`The value of z is: ${z}`); // Output: The value of z is: null
z = undefined; // This is also allowed
// console.log(`The value of z is: ${z}`); // Output: The value of z is: undefined


// never
function throwError(message: string): never {
    throw new Error(message);
}

// never is the subtype of every type, including null and undefined.
// However, no type is a subtype of never (not even never itself), so you can never have a value of type never.
let xNever: never;
// console.log(`The value of xNever is: ${xNever}`); // Variable 'xNever' is used before being assigned
// console.log(`The type of xNever is: ${typeof xNever}`); // Variable 'xNever' is used before being assigned
// xNever = never; // 'never' only refers to a type, but is being used as a value here
// xNever = throwError("This function always throws an error."); // This is valid, as throwError returns never
// xNever = 123; // Error: Type 'number' is not assignable to type 'never'
// xNever = (() => { throw new Error("This function also always throws an error."); })();
// This is also valid, as the IIFE returns never
// IIFE（Immediately Invoked Function Expression，立即调用函数表达式） is a JavaScript pattern
// that allows you to execute a function immediately after defining it.
// It is often used to create a new scope and avoid polluting the global namespace.
// In this case, the IIFE is used to throw an error immediately, which is valid because it returns never.


let yNumber: number;
// yNumber = (() => { throw new Error("This function always throws an error."); })();
// This is valid, as the IIFE returns never, which is assignable to number
// console.log(yNumber); // This will never be reached, as the IIFE throws an error


// 返回值为 never 的函数可以是抛出异常的情况
function myError(message: string): never {
    throw new Error(message);
}
// let neverFunc: never = myError("This function always throws an error.");


// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
// let neverLoopFunc: never = loop(); // This is valid, as loop() never returns


// array
// 数组类型，两种等价写法
// type[] syntax
let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers); // Output: [1, 2, 3, 4, 5]
let names: string[] = ["Alice", "Bob", "Charlie"];
// console.log(names); // Output: ["Alice", "Bob", "Charlie"]
// generic array syntax
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];
// console.log(moreNumbers); // Output: [6, 7, 8, 9, 10]
let moreNames: Array<string> = ["Dave", "Eve", "Frank"];
// console.log(moreNames); // Output: ["Dave", "Eve", "Frank"]


// tuple
// 元组：固定长度和类型的数组
let person: [string, number] = ["Alice", 30];
let point: [number, number] = [10, 20];
// console.log(person); // Output: ["Alice", 30]
// console.log(point); // Output: [10, 20]


// enum 枚举
// By default, enums are assigned numeric values starting from 0
// 数字枚举（默认从 0 开始自增）
// enum Color {
//     Red,    // 0
//     Green,  // 1
//     Blue    // 2
// }
// let favoriteColor: Color = Color.Red;
// console.log(`My favorite color of Color.Red is ${favoriteColor}.`);
// Output: My favorite color of Color.Red is 0.
// favoriteColor = Color.Green;
// console.log(`My favorite color of Color.Green is ${favoriteColor}.`);
// Output: My favorite color of Color.Green is 1.
// favoriteColor = Color.Blue;
// console.log(`My favorite color of Color.Blue is ${favoriteColor}.`);
// Output: My favorite color of Color.Blue is 2.
// You can also get the name of the enum member from its value
// console.log(`Color[0] is ${Color[0]}.`); // Output: Color[0] is Red.
// console.log(`Color[1] is ${Color[1]}.`); // Output: Color[1] is Green.
// console.log(`Color[2] is ${Color[2]}.`); // Output: Color[2] is Blue.
// 字符串枚举（更推荐，调试时值更可读）
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
function paint(color: Color): void {
    console.log(`Painting with color: ${color}`);
}
// paint(Color.Red);   // Output: Painting with color: RED
// paint(Color.Green); // Output: Painting with color: GREEN
// paint(Color.Blue);  // Output: Painting with color: BLUE
// console.log(`Color["Red"] is ${Color["Red"]}.`); // Output: Color["Red"] is RED.
// const 枚举：编译后会被内联，减少运行时开销
const enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalError = 500,
}

const httpstatus: HttpStatus = HttpStatus.OK; // 编译后直接替换为数字 200
// console.log(`HTTP Status OK is ${httpstatus}.`); // Output: HTTP Status OK is 200.


// any
let randomValue: any = 42;
// console.log(`The initial value of randomValue is: ${randomValue}`);
// Output: The initial value of randomValue is: 42
randomValue = "Now I'm a string!";
// console.log(`The new value of randomValue is: ${randomValue}`);
// Output: The new value of randomValue is: Now I'm a string!
randomValue = true; // Now I'm a boolean!
// console.log(`The value of randomValue is now: ${randomValue}`);
// Output: The value of randomValue is now: true


// any + Array
let mixedArray: any[] = [1, "two", true, { name: "Alice" }];
let anotherMixedArray: Array<any> = [3.14, "pi", false, { type: "number" }];
// console.log(mixedArray); // Output: [1, "two", true, { name: "Alice" }]
// console.log(anotherMixedArray); // Output: [3.14, "pi", false, { type: "number" }]
mixedArray[1] = 100; // Now the second element is a number
// console.log(mixedArray); // Output: [1, 100, true, { name: "Alice" }]


// object
// let user: object = { name: "Alice", age: 30 };
// console.log(`The type of {name: "Alice", age: 30} is: ${typeof user}`);
// Output: The type of {name: "Alice", age: 30} is: object
// Another way to define an object type is to use an interface or a type alias
// let user: { name: string; age: number } = { name: "Alice", age: 30 };
// console.log(`The user's name is: ${user.name} and age is: ${user.age}`);
// Output: The user's name is: Alice and age is: 30
// interface User {
//     name: string;
//     age: number;
// }
// let user: User = { name: "Alice", age: 30 };
// console.log(`The user's name is: ${user.name} and age is: ${user.age}`);
// Output: The user's name is: Alice and age is: 30
// type User = {
//     name: string;
//     age: number;
// }
// let user: User = { name: "Alice", age: 30 };
// console.log(`The user's name is: ${user.name} and age is: ${user.age}`);
// Output: The user's name is: Alice and age is: 30
// interface is preferable when you want to define a contract for classes or objects,
// while type alias is more flexible and can be used for other types as well,
// such as union types, intersection types, etc.
interface User {
    name: string;
    age?: number;
    // age?: number = 18; // Error: An interface property cannot have an initializer
}
let user1: User = { name: "Alice" }; // age is optional
let user2: User = { name: "Bob", age: 25 };
// console.log(`User1's name is: ${user1.name} and age is: ${user1.age}`);
// Output: User1's name is: Alice and age is: undefined
// console.log(`User2's name is: ${user2.name} and age is: ${user2.age}`);
// Output: User2's name is: Bob and age is: 25


// interface
// 接口用来描述对象的"形状"（Shape），定义对象应该具备哪些属性和方法
interface newUser {
    id: number;
    name: string;
    email?: string; // 可选属性
    greet(): void; // 方法
    readonly role: string; // 只读属性
}
// 函数参数使用接口类型
function printUser(user: newUser): void {
    console.log(`User ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
    user.greet();
}
const admin: newUser = {
    id: 1,
    name: "Admin",
    // email: "admin@example.com",
    role: "Administrator",
    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}
// printUser(admin);
// admin.greet(); // Output: Hello, Admin!
// admin.role = "Super Admin"; // Error: Cannot assign to 'role' because it is a read-only property


// interface inheritance
interface myNewUser extends newUser {
    isActive: boolean;
}
const activeUser: myNewUser = {
    id: 2,
    name: "activeAdmin",
    email: "activeadmin@example.com",
    role: "Administrator",
    isActive: true,
    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}
// printUser(activeUser);
// Output:
// User ID: 2, Name: activeAdmin, Role: Administrator
// Email: activeadmin@example.com
// Hello, activeAdmin!
// console.log(`Is active user: ${activeUser.isActive}`); // Output: Is active user: true


// type alias: union types, literal types, intersection types, function types, etc.
// 类型别名用 type 关键字创建，可以为任何类型定义别名，包括联合类型、交叉类型等复杂结构
// union types
// 联合类型：变量可以是多种类型之一
type ID = number | string;
let userId: ID;
userId = 123;
// console.log(`User ID is: ${userId}`); // Output: User ID is: 123
userId = "abc123";
// console.log(`User ID is: ${userId}`); // Output: User ID is: abc123
// userId = true; // Error: Type 'boolean' is not assignable to type 'ID'
// literal types
// 字面量类型：限制变量只能取特定的值，请参考后续的 literal types 部分
type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}
// move("up"); // Output: Moving up
// move("down"); // Output: Moving down
// move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
// intersection types
// 交叉类型：将多个类型合并为一个类型，变量必须满足所有类型的要求
type WithTimeStamp = {
    createdAt: Date;
    updatedAt: Date;
}
type UserWithTimeStamp = newUser & WithTimeStamp;
const userWithTimeStamp: UserWithTimeStamp = {
    id: 3,
    name: "timestampUser",
    role: "User",
    email: "timestampuser@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}
// console.log(`User ID: ${userWithTimeStamp.id}, Name: ${userWithTimeStamp.name}, Role: ${userWithTimeStamp.role}`);
// console.log(`Created at: ${userWithTimeStamp.createdAt}, Updated at: ${userWithTimeStamp.updatedAt}`);
// function types
// type GreetFunction = (name: string) => string;
// arrow function syntax
// const greetFunction: GreetFunction = (name: string) => {
//     return `Hello, ${name}!`;
// }
// function expression syntax
// const greetFunction: GreetFunction = function(name: string): string {
//     return `Hello, ${name}!`;
// }
// type GreetFunction<T extends string> = (name: T) => string;
// const greetFunction: GreetFunction<string> = (name: string) => {
//     return `Hello, ${name}!`;
// }
// type GreetFunction<T, U> = (name: T) => U;
// const greetFunction: GreetFunction<string, string> = (name: string) => {
//     return `Hello, ${name}!`;
// }
type GreetFunction<T, U extends string> = (name: T) => U;
const greetFunction: GreetFunction<string, string> = (name: string): string => {
    return `Hello, ${name}!`;
} 
// console.log(greetFunction("TypeScript")); // Output: Hello, TypeScript!
const greetFunction2: GreetFunction<number, string> = (id: number): string => {
    return `Hello, user with ID ${id}!`;
}
// arrow function parameter "id" can be different from the function type alias parameter "name",
// as long as the type matches
// console.log(greetFunction2(42)); // Output: Hello, user with ID 42!


// void
function logMessage(message: string): void {
    console.log(message);
}
// logMessage("This is a log message."); // Output: This is a log message.
// let result: void = logMessage("This function returns void."); // Output: This function returns void.
// console.log(result); // Output: undefined
let anotherResult: void = undefined; // This is valid, as void can only be assigned undefined or null
// console.log(`anotherResult: ${anotherResult}`); // Output: anotherResult: undefined
// anotherResult = null;  // Error: Type 'null' is not assignable to type 'void'
// This is valid when using tsc --strictNullChecks false,
// as void can only be assigned undefined or null
// console.log(`anotherResult: ${anotherResult}`); // Output: anotherResult: null


// object
// object type represents non-primitive types, i.e., anything that is not number, string, boolean, symbol, null, or undefined.
let obj: object = { name: "Alice", age: 30 };
let arr: object = [1, 2, 3];
// console.log(`The value of obj is: ${obj}`); // Output: The value of obj is: [object Object]
// console.log(`The value of arr is: ${arr}`); // Output: The value of arr is: 1,2,3
// console.log(`The value of obj is: ${JSON.stringify(obj)}`); // Output: The value of obj is: {"name":"Alice","age":30}
// console.log(`The value of arr is: ${JSON.stringify(arr)}`); // Output: The value of arr is: [1,2,3]
// console.log(`The type of obj is: ${typeof obj}`); // Output: The type of obj is: object
// console.log(`The type of arr is: ${typeof arr}`); // Output: The type of arr is: object

// union types
let unionValue: string | number;
unionValue = "Hello";
// console.log(`The value of unionValue is: ${unionValue}`); // Output: The value of unionValue is: Hello
unionValue = 42;
// console.log(`The value of unionValue is: ${unionValue}`); // Output: The value of unionValue is: 42
// unionValue = true; // Error: Type 'boolean' is not assignable to type 'string | number'

// unknown
let unknownValue: unknown;
unknownValue = "Hello, TypeScript!";
// console.log(`The value of unknownValue is: ${unknownValue}`); // Output: The value of unknownValue is: Hello, TypeScript!
unknownValue = 42;
// console.log(`The value of unknownValue is: ${unknownValue}`); // Output: The value of unknownValue is: 42
unknownValue = true;
// console.log(`The value of unknownValue is: ${unknownValue}`); // Output: The value of unknownValue is: true
unknownValue = "Hello, TypeScript!";
// unknownValue.toUpperCase(); // Error: Object is of type 'unknown'.
// To use an unknown value, you need to perform a type check first
// if (typeof unknownValue === "string") {
//     console.log(unknownValue.toUpperCase()); // This is safe, as we have checked that unknownValue is a string
// }
// let stringValue: string;
// if (typeof unknownValue === "string") {
//     stringValue = unknownValue; // This is valid, as we have checked that unknownValue is a string
//     console.log(`The value of stringValue is: ${stringValue}`);
//     // Output: The value of stringValue is: Hello, TypeScript!
// }


// type assertion
let someValue: unknown = "This is a string.";
let strLength: number = (someValue as string).length;
// console.log(strLength); // Output: 17


// type assertion with angle-bracket syntax
let anotherValue: unknown = "Another string.";
let anotherStrLength: number = (<string>anotherValue).length;
// console.log(anotherStrLength); // Output: 15


let yetAnotherValue: any = "Yet another string.";
let yetAnotherStrLength: number = (yetAnotherValue as string).length;
// console.log(yetAnotherStrLength); // Output: 19
let yetAnotherStrLength2: number = (<string>yetAnotherValue).length;
// console.log(yetAnotherStrLength2); // Output: 19

// literal types
let literalString: "Hello, TypeScript!" = "Hello, TypeScript!";
// console.log(`The value of literalString is: ${literalString}`);
// Output: The value of literalString is: Hello, TypeScript!
let literalNumber: 42 = 42;
// console.log(`The value of literalNumber is: ${literalNumber}`);
// Output: The value of literalNumber is: 42
let literalBoolean: true = true;
// console.log(`The value of literalBoolean is: ${literalBoolean}`);
// Output: The value of literalBoolean is: true

// literal types can also be used in union types
let literalUnion: "red" | "green" | "blue";
literalUnion = "red";
// console.log(`The value of literalUnion is: ${literalUnion}`); // Output: The value of literalUnion is: red
literalUnion = "green";
// console.log(`The value of literalUnion is: ${literalUnion}`); // Output: The value of literalUnion is: green
literalUnion = "blue";
// console.log(`The value of literalUnion is: ${literalUnion}`); // Output: The value of literalUnion is: blue
// literalUnion = "yellow"; // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'. 

// ternary operator
// console.log(`The value of age is: ${age}`); // Output: The value of age is: 30
let isEven: boolean = (age % 2 === 0) ? true : false;
// console.log(`Is age even? ${isEven}`); // Output: Is age even? false

// 可选参数：参数名后加 ?
function greet(name: string, title?: string): string {
    return title ? `${title} ${name}` : name;
}

// console.log(greet("RUNOOB"));          // 输出：RUNOOB
// console.log(greet("runoob", "Mr."));  // 输出：Mr. runoob


// Generics
// 泛型：在定义函数、接口或类时，不预先指定具体的类型，而在使用时再指定类型的一种特性
function identity<T>(arg: T): T {
    return arg;
}
// console.log(identity<string>("Hello, TypeScript!")); // Output: Hello, TypeScript!
// console.log(identity<number>(42)); // Output: 42
// console.log(identity(true)); // Output: true
// TypeScript can infer the type of the argument,
// so you can also call the function without specifying the type parameter
// Generics can also be used with interfaces and classes, allowing for more flexible and reusable code
// generic interface
// 泛型接口
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}
interface UserData {
    id: number;
    name: string;
    email?: string;
}
const userResponse: ApiResponse<UserData> = {
    data: { id: 1, name: "Alice" },
    status: 200,
    message: "User found"
};
// console.log(userResponse);
// Output: { data: { id: 1, name: "Alice" }, status: 200, message: "User found" }
// 泛型约束：限制 T 必须有 id 属性
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}
// console.log(getById([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }], 1));
// Output: { id: 1, name: "Alice" }


// class and access modifiers
// 类和访问修饰符：public、private、protected and readonly
class Animal {
    readonly name: string; // 只读属性，初始化后不能修改
    private age: number; // 私有属性，只能在类内部访问
    protected species: string; // 受保护属性，可以在类内部和子类中访问

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // public method (default)
    public introduce(): string {
        return `I am ${this.name}, a ${this.species}.`;
    }

    // getter: 像访问属性一样访问方法
    get info(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Dog extends Animal {
    private breed: string; // 私有属性，只能在类内部访问

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Canis lupus familiaris"); // 调用父类构造函数
        this.breed = breed;
    }

    // child class can access protected members of the parent class
    describe(): string {
        return `${this.name} is a ${this.species}, breed: ${this.breed}.`;
    }
}

const dog = new Dog("Buddy", 3, "Lbrador");
console.log(dog.introduce()); // Output: I am Buddy, a Canis lupus familiaris.
console.log(dog.info); // Output: Buddy is 3 years old.
// console.log(dog.age); // Error: Property 'age' is private and only accessible within class 'Animal'.