# 可选属性
非必需的属性, 对象`obj`定义时, 使用interface定义的对象类型`Flaw`, 可以缺失可选属性`f`和`a`.
```typescript
interface Flaw {
  f?: String,
  l: String,
  a?: (Number | String)[],
  w: Number
}

const obj: Flaw {
  f: 'F',
  l: 'L',
  w: '22'
}
```

---

# 只读属性
无法写入, 无法修改的属性值, 只能被读取.
有点像const声明的变量, 不过是在对象里.
```typescript
interface Flaw {
  readonly f: Number,
  l?: String,
  a: String,
  readonly w?: String // 可选加只读, 若有这个属性, 则只能读取
}
```
