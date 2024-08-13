//modules:
 
// a.js : file/module
// ---------
// function add(x,y) {return x+y}
// function sub(x,y) {return x-y}
// export default function mul(x,y) {return x*y}
// function div(x,y) {return x/y}
 
// export {add,sub,div}
// ----------
// b.js
// --------
// named vs default:
 
// named imports : 1) { }  2) same name should be there 3) any no of functions/variables we can import
 
// import {add,sub,mul,div} from 'a.js';
 
// ------
 
// default export:
// 1) only 1 per the file/module: default 
// 2) no {} 
// 3) any name u can refer
 
// import {add,sub,div} from 'a.js';//named
// import amit from 'a.js';//default 
// amit(3,4); --> 12