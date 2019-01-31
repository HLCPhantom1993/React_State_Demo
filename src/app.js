/* 不需要通过渲染模版函数自动更新数据: React State */ 
class Counter extends React.Component {
    /* 类构造函数传入包装好的需要初始化的数据 */ 
    constructor(props) {
        /* 通过继承 React Component 来实现父类为其构造初始化数据 */ 
        super(props); 
        /* 定义类函数并将当前类绑定到该函数 */ 
        
        /* 定义add为一个事件处理器, 比如一个onClick事件, this.add(this)会返回一个
         * 新的原本指向this的函数现在指向(this). 这是一种在call构造函数的过程中保存
         * 住this的当前的数据方法, 也就是说将add事件处理器绑定到当前类的文本中所以在
         * 后边的代码中可以使用this.setState()方法时this不会指向空
         */
        this.add = this.add.bind(this); 
        this.minus = this.minus.bind(this);

        /* 设置当前类的state, 一个state代表一个文本状态 */ 
        this.state = {
            /* 当前状态的一个property */ 
            counter: 0
        }
    }


    add() {
        /* 因为add事件处理器被捆绑到Counter类, this现在指向Counter类 */
        /* setState()方法处理并更新当前文本的状态 */
        this.setState((prveState) => { /* prevState即是当前事件发生时的文本 */
            console.log('加1之后计数器变为: ' + (prveState.counter+1));
            return {
                /* 重置当前文本的state的计数器 */
                counter: prveState.counter+1
            }; 
        });
    }

    minus() {
        this.setState((prevState) =>{
            console.log('减1之后计数器变为: ' + (prevState.counter-1)); 
            return {
                counter: prevState.counter-1
            };
        });
    }

    render() {
        return (
            <div>
                <h2>React State Demo</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        ); 
    }
}

const appRoot = document.getElementById("app"); 
ReactDOM.render(<Counter />, appRoot); 
