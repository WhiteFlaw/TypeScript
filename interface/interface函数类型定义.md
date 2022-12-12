与使用interface定义对象类型相似, interface也可以为函数自定义类型, 使用该自定义类型的函数也应当描述为interface中所定义的格式.

定义接口(自定义函数类型)`aSum`.
```typescript
interface aSum {
  (x: number, y: number): number
  // (参数1: 参数类型, 参数2: 参数类型): 函数返回值类型
}
```

以上自定义函数类型相当于:
```typescript
type aSum = (x: number, y: number): number
```
两者定义同名的函数类型时会标红:
```typescript
interface aSum {
  (x: number, y: number): number
}

type aSum = (x: number, y: number): number
```

使用aSum类型定义函数:
```tyepscript
const add: aSum = (num1, num2) => {
  return num1 + num2
}
```

使用例:
```typescript
interface calcTwo {
  (a: Number, b: Number) : Number
}

const add = function (a: number, b: number): number {
  return a + b;
}

function calcArr(arr: number[], calc: calcTwo, defaultVal: number) {
  for (let i = 0; i < arr.length; i++) {
    defaultVal += arr[i];
  }
  return defaultVal
}

const arr: number[] = [2, 4, 6, 8, 10];
console.log('累加', calcArr(arr, add, 0))
```

# 为何使用interface而非类型别名type
一个接口中不仅可以定义函数, 接口可以拥有自己的属性和方法.
```typescript
interface Lib {
  (): void;
  version: String;
  doSomeThing(): void;
}

let lib: Lib = (() => {}) as Lib
lib.version = '1.0'
lib.doSomeThing = () => {}
```

以下实现混合接口Lib的方式报错: 
```typscript
interface Lib {
  (): void;
  version: String;
  doSomeThing(): void;
}

let lib: Lib = () => {}
lib.version = '1.0'
lib.doSomeThing = () => {}
```
类型“() => void”缺少类型“Lib”中的以下属性: version, doSomeThing
