## 1. mobx

mobx是一个简单可扩展的状态管理库

## 2. mobx vs redux

mobx学习成本更低，性能更好的状态解决方案

- 开发难度低
- 开发代码量少
- 渲染性能好

## 3. 核心思想

状态改变引起的副作用应该被自动触发

- 应用逻辑只需要修改状态数据即可，mobx会自动渲染UI，无需人工干预
- 数据改变只会渲染对应的组件
- eact通过提供机制把应用状态转换为壳渲染组件树并对其进行渲染

## 4. 环境准备

#### 4.1 安装依赖模块

#### 4.2 webpack.config.js

#### 4.3 package.json

## 5. Decorator

#### 5.1 类的修饰

#### 5.2 修饰属性

#### 5.3 修饰方法

## 6. Proxy

## 7. mobx

#### 7.1 observable

###### 7.1.1 引用类型（observable）

###### 7.1.2 基本类型（observable.box）

###### 7.1.3 decorator

## 8. 使用对可观察对象作出响应

#### 8.1 computed

#### 8.2 autorun

#### 8.3 when