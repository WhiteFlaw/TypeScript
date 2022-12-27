function printAge(num = 18) {
    console.log(num);
    return num;
}

// printAge函数的返回值在此处被自动推论为number类型;

interface PrintAge { // PrintAge定义PrintAge类型返回String
    (num: number): string;
}

// const printAge1: PrintAge = printAge;
// 然后现在把返回number类型的printAge赋值给PrintAge(返回字符串的接口)类型
// 报错: 不能将类型“(num?: number) => number”分配给类型“PrintAge”.不能将类型“number”分配给类型“string”。
