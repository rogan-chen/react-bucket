import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<React.Fragment>
			<p>{number}</p>
			<button onClick={() => setNumber(number + 1)}>+</button>
			<button onClick={() => setNumber(number - 1)}>-</button>
		</React.Fragment>
	);
}

function Counter2() {
	const [number, setNumber] = useState(0);

	// 每次都会创建出自己的闭包
	function alertNumber() {
		setTimeout(() => {
			alert(number);
		}, 2000);
	}

	return (
		<React.Fragment>
			<p>{number}</p>
			<button onClick={() => setNumber(number + 1)}>+</button>
			<button onClick={() => setNumber(number - 1)}>-</button>
			<button onClick={alertNumber}>alertNumber</button>
		</React.Fragment>
	);
}

function Counter3({ number }) {
	// 惰性初始化
	const [count, setCount] = useState(function () {
		return { number }
	});

	function addNumber() {
		setTimeout(() => {
			// 函数式用法
			setCount(value => ({
				...value,
				number: value.number + 1
			}))
		}, 2000);
	}

	return (
		<React.Fragment>
			<p>{count.number}</p>
			<button onClick={() => setCount({
				...count,
				number: count.number + 1
			})}>+</button>
			<button onClick={() => setCount({
				...count,
				number: count.number - 1
			})}>-</button>
			<button onClick={addNumber}>addNumber</button>
		</React.Fragment>
	);
}

ReactDOM.render(
	<Counter3 number={10} />,
	document.getElementById('root')
);