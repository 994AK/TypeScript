// 函数定义 指定参数的类型和返回值
function hello(name:string):void {
    console.log('hello',name)
}

hello('hahaha')

// 函数表达式 定义函数类型
type SumFunc = (x:number, y:number) => number

// 参数要求都是数字类型,返回类型也是数字类型
const countNumber: SumFunc = function (a,b) {
    return a + b
}

// 可选参数 TS要求形参与实参必须一样,不一样就要配置可选参数
// 配置可选参数而且是最后一个参数
// age?: 配置可选参数
function print(name: string,age?:number):void {
    console.log(name,age)
}
print('hahaha')

// 函数的默认参数
// method: string = 'GET'
function ajax(url:string,method:string = 'GET') {
    console.log(url,method)
}

ajax('/users')

// 剩余参数
function sum(...numbers:number[]) {
    return console.log(numbers)
}

sum(1,2,3,4)

//函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
//函数提供多个函数类型定义
let obj:any ={};
function attr(val:string):void;
function attr(val:number):void;
function attr(val:any):void {
    if(typeof val === 'string') {
        obj.name = val;
    } else  {
        obj.age = val;
    }
}

attr('hahaha')
attr(9)
attr(String(true))
console.log(obj)

