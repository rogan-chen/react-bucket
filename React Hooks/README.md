## 1. React Hooks

- Hooks是React 16.8新增的特性，他可以让你不编写class的情况下使用state和生命周期
- 如果你在编写函数组件并意识到需要向其添加一些state，以前的做法是必须将其转换成class

## 2. 解决的问题

- 在组件之间复用状态逻辑很难，可能要用到render Props和高阶组件，React需要为共享状态逻辑提供更好的原生途径，Hooks使得你在无需修改组件结构的情况下复用状态逻辑
- 复杂组件变得难以理解，Hooks将组件中互相关联的部分拆分成更小的函数
- 难以理解的class，包括难以琢磨的this

## 3. 注意事项

- 只能在函数最外层调用Hooks，不要啊在循环、条件判断或者子函数中调用
- 只能在React的函数组件中调用Hooks，不要再其他JavaScript函数中调用

## 4. useState

- useState就是一个hook
- 通过在函数组件中调用它来给组件添加一些内部state，React会在重复渲染是保留这个state
- useState会返回一对值，当前状态和一个让你更新他的函数，你可以在时间处理函数中或者其他一些地方调用这个函数，它类似class组件的this.state，但是他不会把新的state和旧的state进行合并
- useState唯一的参数就是初始state

#### 4.1 计数器

#### 4.2 每次渲染都是独立的闭包

- 每次渲染都有它自己的Prop和state
- 每次渲染都有它自己的事件处理函数
- alert会捕获点击按钮时候的状态
- 组件函数每次渲染都会被调用，但是每次调用中number值都是常量，并且它被赋予当前渲染中的状态值
- 在单次渲染的范围内，prop和state始终保持不变

```JSX
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
```

#### 4.3 函数式更新

- 如果新的state需要通过使用先前的state计算得出，那么可以将函数传递给setState
- 该函数将接受先前的state，并返回一个更新后的值

#### 4.4 惰性初始化 state

- initialState参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
- 如果初始state需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的state，此函数只会在初始渲染时被调用
- 与class组件中的setState方法不同，useState不会自动合并更新对象。你可以用函数式的setState结合展开运算符来达到合并更新对象的效果

```JSX
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
```

#### 4.5 性能优化

###### 4.5.1 Object.is

- 调用State Hook的更新函数并传入当前的state时，React将跳过子组件渲染及effect的执行

###### 4.5.2 减少渲染次数

- 将内敛回调函数及依赖项数组作为参数传入useCallback，他将返回该回调函数的memoized版本，该回调函数仅在某个依赖项改变的时候才会更新
- 把创建函数和依赖项数组作为参数传入useMemo，他仅会在某个依赖项改变时才重新计算memoized值。这种优化有助于避免在每次渲染是都进行高开销的计算

## 5. useReducer

## 6. useContext

## 7. effect

#### 7.1 通过class实现修改标题

#### 7.2 通过effect实现

#### 7.3 消除副作用

#### 7.4 跳过effect进行性能优化

#### 7.5 useRef

###### 7.5.1 useRef

###### 7.5.2 forwardRef

###### 7.5.3 useImperativeHandle

## 8. useLayoutEffect

## 9. 自定义Hook

## 10. 附录