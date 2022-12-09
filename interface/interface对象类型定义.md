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
