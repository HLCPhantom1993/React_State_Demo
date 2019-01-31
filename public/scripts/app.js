'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 不需要通过渲染模版函数自动更新数据: React State */
var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    /* 类构造函数传入包装好的需要初始化的数据 */
    function Counter(props) {
        _classCallCheck(this, Counter);

        /* 定义类函数并将当前类绑定到该函数 */

        /* 定义add为一个事件处理器, 比如一个onClick事件, this.add(this)会返回一个
         * 新的原本指向this的函数现在指向(this). 这是一种在call构造函数的过程中保存
         * 住this的当前的数据方法, 也就是说将add事件处理器绑定到当前类的文本中所以在
         * 后边的代码中可以使用this.setState()方法时this不会指向空
         */
        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
        /* 通过继承 React Component 来实现父类为其构造初始化数据 */


        _this.add = _this.add.bind(_this);
        _this.minus = _this.minus.bind(_this);

        /* 设置当前类的state, 一个state代表一个文本状态 */
        _this.state = {
            /* 当前状态的一个property */
            counter: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'add',
        value: function add() {
            /* 因为add事件处理器被捆绑到Counter类, this现在指向Counter类 */
            /* setState()方法处理并更新当前文本的状态 */
            this.setState(function (prveState) {
                /* prevState即是当前事件发生时的文本 */
                console.log('加1之后计数器变为: ' + (prveState.counter + 1));
                return {
                    /* 重置当前文本的state的计数器 */
                    counter: prveState.counter + 1
                };
            });
        }
    }, {
        key: 'minus',
        value: function minus() {
            this.setState(function (prevState) {
                console.log('减1之后计数器变为: ' + (prevState.counter - 1));
                return {
                    counter: prevState.counter - 1
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'React State Demo'
                ),
                React.createElement(
                    'p',
                    null,
                    'Counter: ',
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    { onClick: this.add },
                    'Add'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minus },
                    'Minus'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(Counter, null), appRoot);
