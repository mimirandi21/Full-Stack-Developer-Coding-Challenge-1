import React, { Component } from "react";
import NavBar from "../components/NavBar.js";
import AlertDisplay from "../components/AlertDisplay.js";
import SatDisplay from "../components/SatDisplay.js";
import { connect } from "react-redux";
import { fetchLoginStatus } from "../redux/actions/UsersActions";
import { RuxPopUpMenu } from "@astrouxds/rux-pop-up-menu/rux-pop-up-menu.js";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}

	render() {
		if (this.props.errors) {
			return (
				<rux-modal
					title="Error"
					message={this.props.errors}
					confirmText="Ok"
				></rux-modal>
			);
		}
		return (
			<div className="app-grid">
				<NavBar user={this.props.user} />
				<AlertDisplay />
				<SatDisplay />
			</div>
		);
	}
}

const mSTP = (state) => {
	return {
		user: state.users.currentUser,
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

export default connect(mSTP, mDTP)(Main);
