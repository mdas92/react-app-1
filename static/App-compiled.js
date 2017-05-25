var Icon = React.createClass({
  render: function () {
    return React.createElement("img", { src: this.props.src, height: this.props.ht, className: "icon", alt: "icon" });
  }
});
var Banner = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      { id: "banner" },
      React.createElement(Icon, { src: "flogo.svg", ht: "130" }),
      React.createElement(
        "h2",
        null,
        "FIHM Admin Page"
      )
    );
  }
});
var BookingArea = React.createClass({
	getInitialState() {
		return { message: 'default' };
	},
	handleAdd(e) {
		e.preventDefault();
		console.log("handling..");
		this.setState({ message: "Handled submit." });
		//this.sendBookingData();
	},
	sendBookingData: function () {
		// Fetch form values.
		var formData = {
			name: ReactDOM.findDOMNode(this.refs.name).value,
			phone: ReactDOM.findDOMNode(this.refs.phone).value,
			dob: ReactDOM.findDOMNode(this.refs.dob).value,
			amount: ReactDOM.findDOMNode(this.refs.amount).value
		};
		console.log("Form data: ");
		console.log(formData);
		// Send the form data.
		var xmlhttp = new XMLHttpRequest();
		var _this = this;
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4) {
				var response = JSON.parse(xmlhttp.responseText);
				if (xmlhttp.status === 200 && response.status === 'OK') {
					_this.setState({ message: 'Submitted.' });
					console.log('Submitted');
				} else {
					_this.setState({ message: 'Sorry, there has been an error.' });
				}
			}
		};
		xmlhttp.open('POST', 'add', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(this.requestBuildQueryString(formData));
	},
	requestBuildQueryString: function (params) {
		var queryString = [];
		for (var property in params) if (params.hasOwnProperty(property)) {
			queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
		}
		return queryString.join('&');
	},

	render() {
		if (this.props.type == 'Add Booking') var bookingArea = React.createElement(
			"form",
			{ id: "addbookingform", className: "col-flex-container" },
			React.createElement(
				"div",
				{ className: "flex-item" },
				React.createElement(
					"label",
					null,
					"Name:"
				),
				React.createElement("input", { type: "text", className: "form-control", ref: "name" }),
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "flex-item" },
				React.createElement(
					"label",
					null,
					"Phone No.:"
				),
				React.createElement("input", { type: "tel", className: "form-control", ref: "phone" }),
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "flex-item" },
				React.createElement(
					"label",
					null,
					"Date of Birth:"
				),
				React.createElement("input", { type: "date", className: "form-control", ref: "dob" }),
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "flex-item" },
				React.createElement(
					"label",
					null,
					"Amount(in Rs.):"
				),
				React.createElement("input", { type: "text", className: "form-control", ref: "amount" }),
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "flex-item" },
				React.createElement(
					"button",
					{ type: "submit", form: "addbookingform", className: "btn btn-success btn-lg", value: "Submit", onSubmit: this.handleAdd },
					"Submit"
				)
			),
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement(
				"div",
				null,
				this.state.message
			)
		);

		return React.createElement(
			"div",
			{ className: "flex-container" },
			bookingArea
		);
	}
});
var BookingMenu = React.createClass({

	handleClick(e) {
		var selected = e.currentTarget.id;
		this.props.setType(selected);
	},
	render() {
		return React.createElement(
			"div",
			{ className: "flex-container" },
			React.createElement(
				"button",
				{ id: "Add Booking", type: "button", className: "btn btn-warning flex-item", onClick: this.handleClick },
				"Add New Booking"
			),
			React.createElement(
				"button",
				{ id: "List All Bookings", type: "button", className: "btn btn-primary flex-item", onClick: this.handleClick },
				"List all bookings"
			),
			React.createElement(
				"button",
				{ id: "Search", type: "button", className: "btn btn-danger flex-item", onClick: this.handleClick },
				"Generate Report"
			)
		);
	}
});
var Homepage = React.createClass({
	getInitialState() {
		return { type: 'default' };
	},
	setHomepageType(ch) {
		this.setState({ type: ch });
	},
	render() {
		if (this.props.displayWhat == 'user') this.props.changeDisplayWhat();else return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Welcome, ',
				this.props.username
			),
			React.createElement(BookingMenu, { setType: this.setHomepageType }),
			React.createElement(BookingArea, { type: this.state.type })
		);
	}
});

var Login = React.createClass({

	getInitialState() {
		return {
			user: '',
			password: ''
		};
	},

	handleUserChange: function (e) {
		this.setState({ user: e.target.value });
	},
	handlePasswordChange: function (e) {
		this.setState({ password: e.target.value });
	},
	handleSubmit(e) {
		e.preventDefault();
		this.props.changeDisplayWhat(this.state.user);
		this.sendLoginData();
	},
	sendLoginData: function () {
		// Fetch form values.
		var formData = {
			username: ReactDOM.findDOMNode(this.refs.user).value,
			password: ReactDOM.findDOMNode(this.refs.pwd).value

		};
		// Send the form data.
		var xmlhttp = new XMLHttpRequest();
		var _this = this;
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
				var response = xmlhttp.responseText;
				console.log("Response: " + response);
				_this.props.changeLogin(response);
			}
		};
		xmlhttp.open('POST', 'send', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(this.requestBuildQueryString(formData));
	},

	requestBuildQueryString: function (params) {
		var queryString = [];
		for (var property in params) if (params.hasOwnProperty(property)) {
			queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
		}
		return queryString.join('&');
	},

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'form',
				{ id: 'loginform', className: 'col-sm-4 col-sm-offset-4 form-group form-group-lg', action: '', onSubmit: this.handleSubmit },
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						{ htmlFor: 'usr' },
						'User ID:'
					),
					React.createElement('input', { type: 'text', className: 'form-control input-lg', ref: 'user', value: this.state.user, onChange: this.handleUserChange }),
					React.createElement('br', null)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						{ htmlFor: 'pwd' },
						'Password:'
					),
					React.createElement('input', { type: 'password', className: 'form-control input-lg', ref: 'pwd', value: this.state.password, onChange: this.handlePasswordChange }),
					React.createElement('br', null),
					React.createElement(
						'button',
						{ type: 'submit', form: 'loginform', className: 'btn btn-success btn-lg', value: 'Submit', onSubmit: this.handleSubmit },
						'Submit'
					)
				)
			)
		);
	}

});
var Main = React.createClass({
	getInitialState: function () {
		return {
			displayWhat: '',
			loginStatus: ''
		};
	},
	changeDisplayWhat(name) {
		if (name == 'papia') name = 'Papia Das';
		this.setState({ displayWhat: name });
	},
	changeLoginStatus(status) {
		this.setState({ loginStatus: status });
	},
	render() {
		if (this.state.loginStatus == 'success') return React.createElement(Homepage, { username: this.state.displayWhat });else if (this.state.loginStatus == 'failed') return React.createElement(
			'div',
			null,
			React.createElement(Banner, null),
			React.createElement(
				'div',
				{ className: 'text-danger errMsg' },
				'Login Failed. Please Try Again.'
			),
			React.createElement(Login, { changeDisplayWhat: this.changeDisplayWhat, changeLogin: this.changeLoginStatus })
		);else return React.createElement(
			'div',
			null,
			React.createElement(Banner, null),
			React.createElement(Login, { changeDisplayWhat: this.changeDisplayWhat, changeLogin: this.changeLoginStatus })
		);
	}
});

var Navbar = React.createClass({
	render(i) {
		const pages = ['Home', 'Logout'];
		const pageList = pages.map(page => React.createElement(
			'a',
			{ key: 'page_' + page + i, className: 'navbar-brand', href: '#' },
			page
		));
		return React.createElement(
			'div',
			{ id: 'nav', className: 'nav navbar-inverse navbar-top' },
			pageList
		);
	}
});
var Root = React.createClass({
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Navbar, null),
			React.createElement(Main, null)
		);
	}
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));
