## 理念

```
一个极简的组合className的微小JavaScript库
less code,more benefit!
专注提供组合className功能
```

## 使用

```
import cm from 'js-classname'

//string type
const classes = cm('head','headTop')// 'head headTop'

//array type
const classes = cm(['head','headTop'])// 'head headTop'

//object type
const classes = cm({
	'head':true,
	'headTop':true
})// 'head headTop'

//combination type

const classes = cm('head',{'headTop':true},['headLeft'])// 'head headTop headLeft'
```

## 注意(tips)

```
当使用object参数时，已有的className将被覆盖(When the object argument is used, the existing className will be overwritten)，例如(such as)：
const classes = cm('a',{a:false})// return ''
const classes = cm('a',{a:true})// return 'a'
```

