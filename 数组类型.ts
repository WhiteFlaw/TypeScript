let theNumberArr: Number[] = [1, 3, 3];
// 数字类型数组. 内部元素只能为数字类型

let theNumberArr: String[] = ['sd', '3', '数'];
// 字符串类型数组. 内部元素只能为字符串类型.

---

// 数组泛型

let theStringArr: Array<String> = ['1', '3', 's'];
// 字符串类型数组. 内部元素只能为字符串

let theObjArr: Array<Object> = [
    { a: '1' },
    { a: 9 },
    { a: '3', b: 'g' },
    { a: '3', b: 2 },
]
// 对象类型数组. 内部元素只能为对象
// 使用尖括号的这种方法类似于Java数组泛型

---
    
// 联合类型数组

let theUnityArr1: (Number | String)[] = [1, 'd', 3, 'f'];
// 联合类型数组: Number联合String, 数组内同时支持两种类型

let theUnityArr2: (Number | Object)[] = [1, 'd', {}, []];
// 联合类型数组: Number联合Object, 数组内同时支持两种类型
// 联合类型的Object代表JS的复杂类型, 即typeof结果为object的类型
