// 回调函数------------Demo1

// function fn1() {
// 	console.log('Function 1')
// };

// function fn3() {
// 	console.log('Function 3')
// };

// function fn2(f) {
// 	setTimeout(() => {
// 		console.log('Function 2')//可以视为一个延迟500ms执行的异步函数
// 		f()
// 	}, 500)
// };

// //调用函数
// fn1();
// fn2(fn3)

/* 输出结果：
Function 1
Function 2
Function 3
 */

// 事件发布/订阅---------Demo2
// class AsyncFunArr {
// 	constructor(...arr) {
// 		this.funcArr = [...arr]
// 	}
// 	next() {
// 		const fn = this.funcArr.shift()
// 		if (typeof fn === 'function') fn()
// 	}
// 	run() {
// 		this.next()
// 	}
// };

// const asyncFunArr = new AsyncFunArr(fn1, fn2, fn3);


// function fn1() {
// 	console.log('Function 1')
// 	asyncFunArr.next()
// };

// function fn2() {
// 	setTimeout(() => {
// 		console.log('Function 2')
// 		asyncFunArr.next()
// 	}, 500)
// };

// function fn3() {
// 	console.log('Function 3')
// 	asyncFunArr.next()
// };

// // 调用

// asyncFunArr.next();

/*
输出：
Function 1
Function 2
Function 3
 */


// Promise---------Demo3
// function fn1() {
// 	console.log('Function 1')
// }

// function fn2() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Function 2')
// 			resolve()
// 		}, 500)
// 	})
// }

// function fn3() {
// 	console.log('Function 3')
// }

// //调用方式
// fn1()
// fn2().then(() => { fn3() })

// /*
// 输出：
// Function 1
// Function 2
// Function 3
//  */

// Generator-------Demo4

// function fn1() {
// 	console.log('Function 1')
// }

// function fn2() {
// 	setTimeout(() => {
// 		console.log('Function 2')
// 		af.next()
// 	}, 500)
// }

// function fn3() {
// 	console.log('Function 3')
// }

// function* asyncFunArr(...fn) {
// 	fn[0]()
// 	yield fn[1]()
// 	fn[2]()
// }

// const af = asyncFunArr(fn1, fn2, fn3)

// af.next()

/*
输出：
Function 1
Function 2
Function 3
 */



// Async/Await--------Demo5
// function fn1() {
// 	console.log('Function 1')
// }

// function fn2() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Function 2')
// 			resolve()
// 		}, 500)
// 	})
// }

// function fn3() {
// 	console.log('Function 3')
// }

// async function asyncFunArr() {
// 	fn1()
// 	await fn2()
// 	fn3()
// }

// asyncFunArr()

// /*
// 输出：
// Function 1
// Function 2
// Function 3
//  */