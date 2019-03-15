// window.onload = function () {
// 	alertId();
// };

// 事件模型
function alertId() {
	let txt = "Id: " + document.getElementById("myButton").id
	txt = txt + ", type: " + document.getElementById("myButton").type
	console.log("Clicked");
	console.log("alertId",txt);
};

/*Promise 执行器错误*/

//   let promise =new Promise(function(resolve,reject){
// 	  throw new Error("Explosion!")
//   });

//   promise.catch(function(error){
// 	  console.log(error.message);
//   })

// 等价于如下

// let promise = new Promise(function(resolve,reject){
// 	try{
// 		throw new Error("Explosion!");
// 	}catch (ex){
// 		reject(ex);
// 	}
// });

// promise.catch(function(error){
// 	console.log(error.message);
// })

/*全局Promise 拒绝处理*/
// let rejected = Promise.reject(42);

// //此时，rejected还没有被处理
// console.log("此时，rejected还没有被处理");

// //过了一会儿.....
// rejected.catch(function(value){
// 	// 现在rejected 已经被处理了
// 	console.log("现在rejected 已经被处理了");
// 	console.log(value);
// })

/* 串联Promise */
// let p1 =new Promise(function(resolve,reject){
// 	resolve(42);
// });
// p1.then(function(value){
// 	console.log(value);
// }).then(function(){
// 	console.log("Finished");
// });


// //拆开(上面Code等价于下面Code)如下:
// let p1 =new Promise(function(resolve,reject){
// 	resolve(42);
// });
// let p2=p1.then(function(value){
// 	console.log(value);
// });
// p2.then(function(){
// 	console.log("Finished");
// });

//定义主函数，回调函数作为参数
function A(callback) {
    callback();  
    console.log('我是主函数');      
}

//定义回调函数
function B(){
    setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作  
}

//调用主函数，将函数B传进去
A(B);

/*
输出结果：
我是主函数
我是回调函数 
*/