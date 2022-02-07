# 这个分支用来学习的

```cmd
tsc xxx.ts //编译成JS
tsc --watch // 实时编译JS, 修改就变化
tsc --noEmitOnError --watch //实时编译JS 报错不自动编译
```

## -`tsconfig.json`

## 降级编译 从ES6编译到ES5中 更大的兼容性

```json
"target": "es5" //兼容版本
```

## 严格模式

```json
"strict": true,
"noImplicitAny": true,
"strictNullChecks": true, 
```

## `any`与`Unknown`区别

> Unknown 与 any 区别
> any是JavaScript 原生运行模式,不与TS管理。传什么都可以
> Unknown是 Ts中严格模式,只能与所有类型匹配

```ts
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
```

## `object`,`Object`,`{}`区别

> object 只能是非原始类型
> Object 与 {} 表示 原始类型 与 非原开类型集合

## 类型断言

> 实体具有比它现有类型更确切的类型，需要手动告诉 ts 就按照你断言的那个类型通过编译

```ts
// 尖括号 语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;

```

## 字面量类型

> 可以直接定义字面量的类型, 字符串,数字, 布尔,字面量类型

```ts
let flag1: 'hello' = 'hello'
let flag2: 1 = 1;
let flag3: true = true

console.log(flag1, flag2, flag3)
```

## 类型别名 type

> 通过 type定义类型别名,定义的类型

```ts
type flag = string | number

//只能传 flag类型的参数
function hhh(value: flag): void {
}

hhh('123')
// 或者 hhh(1)
// 传 hhh(null) -> on!
// 传 hhh({}) -> on!
```

## 交叉类型 把多个类型合并成一个类型

```ts
type F = { x: string, y: string }
type H = F & { z: number }

let J: H = {
    x:"1",
    y:"2",
    z: 3
}

console.log(J)
```
