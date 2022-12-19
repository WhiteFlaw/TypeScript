前面说过`interface`在TS中用于规定、定义对象类型, 规范自定义对象类型的形态.
`interface`对于`class`也可以发挥同样的作用, 约束`class`格式, 相比定义对象类型, 定义class类型还需要用到`implements`关键字.
对比: 定义对象类型
```typescript
interface cuObj {
  a: string,
  b?: Number,
  readonly c: (Object | String)[]
}

const obj: cuObj {
  a: '1',
  c: [
    {
      d: 'fs'
    },
    e: 'os'
  ]
}
```

约束class:
```typescript
interface isPlaying {
  play()?: Boolean,
  pause()?: Boolean
}

class musicPlayer implements isPlaying {
  play() {
    return true
  },
  pause() {
    return false
  }
}
```
