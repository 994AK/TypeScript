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
>Unknown 与 any 区别 
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
>object 只能是非原始类型
>Object 与 {} 表示 原始类型 与 非原开类型集合

