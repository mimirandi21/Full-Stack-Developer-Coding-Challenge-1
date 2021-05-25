import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RuxModal } from "@astrouxds/rux-modal/rux-modal.js";
import { fetchLoginStatus } from "../redux/actions/UsersActions";

class Session extends Component {
	render() {
		if (this.props.errors.length !== 0) {
			return (
				<rux-modal
					title="Error"
					message={this.props.errors[0]}
					confirmText="Ok"
				></rux-modal>
			);
		} else {
			return (
				<div className="home">
					<div className="hbo">
						<h3>
							Are you a <Link to="/Login">returning</Link> user?
						</h3>
						<br />
						<h3>
							Or <Link to="/Signup">new</Link> to the site?
						</h3>
					</div>
				</div>
			);
		}
	}
}

const mSTP = (state) => {
	return {
		loggedIn: state.users.loggedIn,
		errors: state.users.errors,
	};
};

const mDTP = (dispatch) => {
	return {
		fetchLoginStatus: () => {
			dispatch(fetchLoginStatus());
		},
	};
};

export default connect(mSTP, mDTP)(Session);
