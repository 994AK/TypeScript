// 布尔值 boolean
const flag: boolean = true;
// 数字 Number
const flag1: number = 1;

// 字符串 String
const flag2: string = 'Hi'

// enum类型 枚举
enum Color {
    RED,
    PINK,
    BLUE,
}

const pink: Color = Color.PINK;
console.log(pink);

// 设置初始值
enum Color1 {
    PED = 10,
    PINK,
    BLUE
}

const pink1: Color1 = Color1.PINK
console.log(pink1)

// 声明字符串枚举
enum Color2 {
    RED = "红色",
    PINK = '粉色',
    BLUE = '蓝色',
}

// 只能使用枚举中的值
const pink2: Color2 = Color2.PINK
console.log(pink2)

//常量枚举
const enum Color3 {
    RED = '红色',
    PINK = '粉色',
    BLUE = '蓝色'
}

const color: Color3[] = [Color3.RED, Color3.PINK, Color3.BLUE];

console.log(color)

//数组类型
const Arr: number[] = [1, 2, 3]
const Arr2: Array<number> = [1, 2, 3]

//特殊数组类型比如包含字符串与数字的数组
//元组类型(tuple)
const Arr3: [string, number] = ['Hello', 1];

// any 接收任何类型,不管
const anyG: any = '123'

// Unknown类型严,匹配所有类型,与any不同,any啥都可以分配
let value: unknown;

// 以下都可以被 unknown匹配
value = true
value = 42
value = 'Hello'
value = []
value = {}

/*
*  Unknown 与 any 区别
*  any是JavaScript 原生运行模式,不与TS管理。传什么都可以
*  Unknown是 Ts中严格模式,只能与所有类型匹配
* */


// void类型 没有返回值
function Hello(name: string): void {
}

// never类型 总是抛出异常的类型
function neverReach():never {
    throw new Error('an error');
}

/*
*  void 和 never 区别
*  void 是代表没有返回值,可以被赋值为null,与undefined的类型
*  never 是代表抛出异常, 拥有never类型无法正常运行,无法终止,或抛出异常
*
* */


// object类型 表示非原始类型
let objectCase: object
objectCase = {}
console.log(objectCase)

// Object 拥有toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object
let objectCa: Object
objectCa = 1;
objectCa = 'a';

console.log(objectCa,111)

// {} 空对象类型 与 Object一样 表示 原始类型和非原始类型集合

let objectC:{}
objectC = 1;
console.log(objectC)

// 类型推论 TS自动推论, 如果推论不出来自动赋值any

let flag10; //没有值 any
let flag11 = 123 //自动推论 number类型
let hello = 'hello' //自动推论 string类型


