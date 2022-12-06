// 有需要多次定义某一类型的变量, 且该类型复杂, 手写定义工序复杂的情况下使用类型别名

// 手写多次声明复杂类型
let arr1: (Number | String)[] = [1, 'a', 4, '4'];
let arr2: (Number | String)[] = [1, 2, '3', 5];

                 |
                 |
                 V

// 利用类型别名多次声明复杂类型
type numStrArr = (Number | String)[];
let arr1: numStrArr = [1, 'a', 4, '4'];
let arr2: numStrArr = [1, 2, '3', 5];

// 看起来像是声明了一个变量来代替类型定义部分的代码, 声明定义变量的方法比较特殊, 类型变量

type StrArr = Array<String>;
let Arr1: StrArr = ['1', 'b', '4']

// 引Vue2.6.1源码为例, 这里定义了类型别名'VNode'
function cloneVNode (vnode: VNode): VNode {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}
