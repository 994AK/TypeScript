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