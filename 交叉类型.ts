// 交叉类型用于对对象类型的形状进行扩展, 即对Interface规定的对象形状进行扩展.
// 举例先定义一个Person接口, 内部具备name和age属性, 现在需要一个内部具备name, age, grade属性的类型
// 将该所需类型定义为Student, 基于交叉类型补全Person得到Student:
interface Person {
    name: string,
    age: number
}

type Student = Person & { grade: number }