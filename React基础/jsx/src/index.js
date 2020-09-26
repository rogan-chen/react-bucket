import React, { Children } from 'react';
import ReactDOM from 'react-dom';

/**
 * JSX JavaScript+XML 是一种把JS和HTML混合书写的语法
 * JSX 是用来描述界面上的元素长什么样子的
 * JSX 可增加属性
 * 因为class是JS的关键字，所以在JSX中不能给元素添加class属性，只能用className
 * JSX里面如果想要使用变量，需要放到大括号里面
 * 
 * JSX是一个普通JS对象
 */

const content = 'Rogan learning React';

// const element = (
// 	<h1 id='mytitle' className='123' style={{ color: 'red' }}>
// 		Hello React {content}
// 	</h1>
// );

// 以下代码和上面的相等
const element = React.createElement(
	'h1',
	{
		id: 'mytitle',
		className: '123',
		style: { color: 'red' },
	},
	`Hello React ${content}`
);

ReactDOM.render(
	element,
	document.getElementById('root')
);