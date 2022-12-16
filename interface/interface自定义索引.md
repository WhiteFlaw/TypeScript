## 不确定数量_索引签名
不具体的指明每个索引的名称(或者叫属性名), 只是描述该处有不定量的某类型.
定义了索引签名的接口允许定义其他具名属性，但是类型必须和索引签名相同.
```typescript
interface RandomKey {
  [propName: string]: string
}

const obj: RandomKey = {
  a: 'hello',
  b: 'lin',
  c: 'welcome',
}

interface Okey1 { // 索引签名重复不会有问题, 如果再加之两个x相同类型则会标红为索引签名重复
  [x: string]: Animal;
  [x: number]: Dog;
}

interface Okey2 { // 类型重复不会有问题, 如果再加之两个索引签名都名为x则会标红为索引签名重复
  [x: number]: Animal;
  [y: number]: Dog;
}
```

---

## 索引名称
一个接口里不能出现两个相同的具名索引, 无论这两个索引的类型以及对应值的类型是否相同, 只要索引名重复都算索引重复, 因为你只能用String或者Number类型值作为索引, 
而无论JavaScript还是TypeScript都会先将指名的用于查询的索引转为String类型再去查找, 即查找obj[3]等同于查找obj['3'], 这会令TypeScript在按照索引去查找的时候为难
就像在Javascript里索引查找
```typescript
const notOkey = {
  3: Dog;
  '3': Animal;
}

notOkey[3]
```
到底应该找哪个呢.

```typescript
class Animal {
  name: 'abc';
}

class Dog { // Dog继承自Animal
  breed: string;
}

interface Okey1 {
  as: Dog;
  'bs': Animal;
}

interface Okey2 {
  4: Dog;
  '3': Animal;
}

interface NotOkey1 { // 标红
  as: Dog;
  'as': Animal;
}

interface NotOkey2 { // 标红
  3: Dog;
  '3': Animal;
}

```

---

## 索引类型规则
"数字索引的返回值必须是字符串索引返回值类型的子类型", 我不明白为什么会有这种奇怪的约定.
找后端大哥问了下, 这只是约定中的一个例子, 完整约定举例, 如果使用一个子类all继承父类part, 那么子类的索引类型应当为父类索引类型的子类型, 而interface中只能使用String或者Number类型值作为索引
所以"如果索引返回值存在父子关系, 那么子返回值的索引应当为Number类型, 父返回值的索引应当为String类型."
/////然后呢???意思是number是string的子类型???
```typescript
class Animal {
  name: 'abc';
}

class Dog extends Animal { // Dog继承自Animal, dog属于动物吧.
  breed: string;
}

interface Okey {
  [x: string]: Animal; // 父类型a： 父类a
  [y: number]: Dog;  // 子类型(父类型a的子类型): 子类(继承父类a)
}

interface NotOkey {
  4: Dog;
  'asa': Animal;
}

```
