// 多态指子类对父类同名方法进行了覆写, 导致在父类和子类中调用同名方法会得到不同的结果
// 同目录下不同的TS文件会报类重名错误, 在编辑器中关闭另一个未使用中的ts文件即可.
class Person { 
    name: String;
    constructor(name: String) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is speaking.`);
    }
}

class Student extends Person {
    speak() {
        console.log(`method 'speak' revived: ${this.name}`)
    }
}

const per = new Person('player_1');
 // 父类如果需要传参数, 那么继承自该父类的子类也需要传参
 // 哪怕是先传参父类之后再调子类也不行, 删掉对`new Student`的传参将会标红.
const stu = new Student('player_2');
per.speak()
stu.speak()
