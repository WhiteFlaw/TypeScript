let theUnityArr1: (Number | String)[] = [1, 'd', 3, 'f'];
// 联合类型数组: Number联合String, 数组内同时支持两种类型

let theUnityArr2: (Number | Object)[] = [1, 'd', {}, []];
// 联合类型数组: Number联合Object, 数组内同时支持两种类型
// 联合类型的Object代表JS的复杂类型, 即typeof结果为object的类型

let theUnityString1: (Number | String) = 3;
let theUnityString2: (Number | String) = 'r';