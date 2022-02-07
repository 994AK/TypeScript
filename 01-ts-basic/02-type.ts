// 联合类型 取值可以多种类型,只能赋值联合类型的属性和方法
// let name: string | number;
// console.log(name.toString())
// name = 1;
// console.log(name.toFixed(2));
// name = 'hello';
//
// console.log(name.length);

//类型断言
// 尖括号 语法
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// as 语法
let someValue1: any = 'this is a string'
let strLength1: number = (someValue1 as string).length

//字面量类型
/* 表示类型
* 1. 字符串字面量类型
* 2. 数字字面量类型
* 3. 布尔字面量类型
* */

let flag1: 'hello' = 'hello'
let flag2: 1 = 1;
let flag3: true = true

console.log(flag1, flag2, flag3)

// 类型别名 定义类型名字

// flag类型
type flag = string | number;

// value传入的类型必须返回值符合 flag类型的定义
function helloword(value: flag): void {
}

helloword("1");

// 交叉类型 多个类型合并为一个类型
type Flag1 = {x:number}
type Flag2 = Flag1 & {y:string}

let flag30: Flag2 = {
    x:1,
    y:'hello',
}

console.log(flag30)

