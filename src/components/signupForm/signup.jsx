import axios from "axios"
import React, { Component } from "react";


class Signup extends Component {
    constructor() {
		super();
		this.state = {
			fullname: "",
			username: "",
			email: "",
			password: "",
		};
		this.changeFUllname = this.changeFUllname.bind(this);
		this.changeUsername = this.changeUsername.bind(this);
		this.changeMail = this.changeMail.bind(this);

		this.changePassword = this.changePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	changeFUllname(event) {
		this.setState({
			fullname: event.taret.value,
		});
	}
	changeUsername(event) {
		this.setState({
			fullname: event.taret.value,
		});
	}
	changeMail(event) {
		this.setState({
			fullname: event.taret.value,
		});
	}

	changePassword(event) {
		this.setState({
			fullname: event.taret.value,
		});
	}

	onSubmit(event) {
		event.prevenDefault();

		const registered = {
			fullname: this.state.fullname,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		};

		axios
			.post("http://localhost:3000/signup", registered)
			.then((res) => console.log(res.data));

		this.setState = {
			fullname: "",
			username: "",
			email: "",
			password: "",
		};
	}


	render() {
		return (
			<div>
				<div className="container">
					<div className="form-div">
						<form action="" onSubmit={this.onSubmit}>
							<input
								type="text"
								placeholder="FullName"
								onChange={this.changeFUllname}
								value={this.state.fullname}
							/>
							<input
								type="text"
								placeholder="Username"
								onChange={this.changeUsername}
								value={this.state.username}
							/>
							<input
								type="email"
								placeholder="E-mail"
								onChange={this.changeMail}
								value={this.state.email}
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={this.changePassword}
								value={this.state.password}
							/>
							<input
								type="submit"
								className="btn btn-danger btn-block"
								value="Submit"
							/>
						</form>
					</div>
				</div>
			</div>
		);
    }
}

export default Signup