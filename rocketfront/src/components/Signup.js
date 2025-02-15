import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../redux/actions/UsersActions";

class Signup extends Component {
	state = {
		username: "",
		password: "",
		passwordConfirmation: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { username, password, passwordConfirmation } = this.state;
		const user = {
			username,
			password,
			passwordConfirmation,
		};
		this.props.signup(user, this.handleSuccess);
	};

	handleSuccess = () => {
		this.setState({
			username: "",
			password: "",
			passwordConfirmation: "",
		});
		this.props.history.push("/main");
	};

	render() {
		if (this.props.errors) {
			this.props.errors.map((e) => {
				return (
					<div className="rux-modal-container">
						<rux-modal
							title="error"
							message={e}
							confirmText="Ok"
							denyText="Cancel"
							customEvent="listen-for-me"
						>
							<div className="rux-modal__titlebar">
								<h1>Error</h1>
							</div>
							<div className="rux-modal__content">
								<div className="rux-modal__message">{e}</div>
								<div className="rux-button-group">
									<rux-button data-value="false" tabindex="-1">
										Cancel
									</rux-button>
									<rux-button data-value="true" tabindex="0">
										OK
									</rux-button>
								</div>
							</div>
						</rux-modal>
					</div>
				);
			});
		}
		return (
			<div className="home">
				<div className="inForm">
					<h1>Sign Up</h1>
					<form className="rux-form-field" onSubmit={this.handleSubmit}>
						<div className="rux-form-field">
							<label for="input__text">Username</label>
							<input
								id="input__text username"
								class="rux-input"
								required
								placeholder="username"
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>

						<div className="rux-form-field">
							<label for="input__text">Password</label>
							<input
								id="input__text password"
								class="rux-input"
								required
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div className="rux-form-field">
							<label for="input__text">Password Confirmation</label>
							<input
								id="input__text passwordConfirm"
								class="rux-input"
								required
								placeholder="passwordConfirmation"
								type="password"
								name="passwordConfirmation"
								value={this.state.passwordConfirmation}
								onChange={this.handleChange}
							/>
						</div>

						<div>
							<rux-button
								size="large"
								placeholder="submit"
								type="submit"
								onClick={this.handleSubmit}
							>
								Sign Up
							</rux-button>
							<span>or</span>
							<rux-button size="large">
								<Link to="/login" className="cufflinks">
									Log In
								</Link>
							</rux-button>
						</div>
					</form>
					<div>{this.state.errors ? this.handleErrors() : null}</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { signup })(Signup);
