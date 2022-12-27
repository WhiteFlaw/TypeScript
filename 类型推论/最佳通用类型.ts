let arr = [0, 1, null, 'lin'];
// 此时arr的类型未被明确给出, 但是TS已经将Arr的类型自动推断为(number|string|null)[]
// 同时包含number类型, string类型和null的数组;

// 虽然TS可以自己推断, 不过最好还是书写的时候就定义好类型, 以上可以写作:

type arrItem = number | string | null

let arr0: arrItem[] = [0, 1, null, 'lin'];