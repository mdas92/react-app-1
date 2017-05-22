'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flogo = require('../ar/flogo.svg');

var _flogo2 = _interopRequireDefault(_flogo);

require('../css/App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = function (_Component) {
  _inherits(Banner, _Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'banner', className: 'Banner' },
        _react2.default.createElement(
          'div',
          { className: 'App-header' },
          _react2.default.createElement('img', { src: _flogo2.default, className: 'App-logo', alt: 'logo' })
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Welcome to FIHM'
        )
      );
    }
  }]);

  return Banner;
}(_react.Component);

exports.default = Banner;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
	_inherits(Login, _Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'login', className: 'text-center ' },
				_react2.default.createElement(
					'form',
					{ id: 'loginform', className: 'col-sm-4 col-sm-offset-4' },
					_react2.default.createElement(
						'div',
						{ className: 'form-group form-group-lg' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'usr' },
							'User ID:'
						),
						_react2.default.createElement('input', { type: 'text', className: 'form-control input-lg', id: 'usr' }),
						_react2.default.createElement('br', null)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group form-group-lg' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'pwd' },
							'Password:'
						),
						_react2.default.createElement('input', { type: 'password', className: 'form-control input-lg', id: 'pwd' }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'button',
							{ type: 'submit', form: 'loginform', className: 'btn btn-success btn-lg', value: 'Submit' },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(_react.Component);

;
exports.default = Login;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
	_inherits(Navbar, _Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render(i) {
			var pages = ['Home', 'Logout'];
			var pageList = pages.map(function (page) {
				return _react2.default.createElement(
					'a',
					{ key: 'page_' + page + i, className: 'navbar-brand', href: '#' },
					page
				);
			});
			return _react2.default.createElement(
				'div',
				{ id: 'nav', className: 'nav navbar-inverse navbar-top' },
				pageList
			);
		}
	}]);

	return Navbar;
}(_react.Component);

;

exports.default = Navbar;
