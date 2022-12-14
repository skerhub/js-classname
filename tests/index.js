import classname from "../dist/index.esm.js"

console.log("start test...")
console.log('input:','expect: ',"result",classname())
console.log('input:null','expect: ',"result",classname(null))
console.log('input:undefined','expect: ',"result",classname(undefined))
console.log('input:"a"','expect: "a"',"result",classname('a'))
console.log('input:"a,b"','expect: "a b"',"result",classname('a','b'))
console.log('input:{a:true}','expect: "a"',"result",classname({'a':true}))
console.log('input:{a:true,b:true}','expect: "a b"',"result",classname({'a':true,'b':true}))
console.log('input:["a"]','expect: "a"',"result",classname(['a']))
console.log('input:["a","b"]','expect: "a b"',"result",classname(['a','b']))
console.log('input:"a",{"b":true,"c":false},["d"]','expect: "a b d"',"result",classname('a',{'b':true,'c':false},['d']))
console.log('input:a,a,a','expect:"a"','result',classname('a','a','a'))
console.log('input:["a","a","a"]','expect:"a"','result',classname(['a','a','a']))
console.log('input:"a",{a:false}','except:""',"result",classname('a',{a:false}))
console.log('input:"a",{a:true}','except:"a"',"result",classname('a',{a:true}))
console.log("test end")