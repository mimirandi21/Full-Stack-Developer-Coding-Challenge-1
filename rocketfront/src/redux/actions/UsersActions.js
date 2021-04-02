import { LOGOUT } from "../actionTypes";
import { AUTH_SUCCESS, AUTH_FAILURE } from "../actionTypes";
import { RuxModal } from "@astrouxds/rux-modal/rux-modal.js";
import * as Cookies from "js-cookie";

export const signup = (userData) => {
	return (dispatch) => {
		fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ user: userData }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.errors && data.errors !== "") {
					dispatch({
						type: AUTH_FAILURE,
						payload: {
							loggedIn: false,
							errors: [data.errors],
						},
					});
				} else {
					dispatch({
						type: AUTH_SUCCESS,
						payload: {
							loggedIn: true,
							currentUser: data.user,
						},
					});
				}
			});
	};
};

export const login = (userData) => {
	return (dispatch) => {
		fetch("http://localhost:3001/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(userData),
		})
			.then((resp) => resp.json())
			.then((data) => {
				if (data.errors && data.errors !== "") {
					dispatch({
						type: AUTH_FAILURE,
						payload: {
							loggedIn: false,
							errors: data.errors,
						},
					});
				} else {
					dispatch({
						type: AUTH_SUCCESS,
						payload: {
							loggedIn: true,
							currentUser: data.user,
						},
					});
				}
			});
	};
};

export const checkLoggedIn = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/logged_in`, {
			credentials: "include",
		})
			.then((res) => res.json())

			.then((data) => {
				if (data.error && data.error !== "") {
					dispatch({
						type: AUTH_FAILURE,
						payload: {
							loggedIn: true,
							currentUser: data.user,
						},
					});
				} else {
					dispatch({
						type: AUTH_SUCCESS,
						payload: {
							loggedIn: data.logged_in,
							currentUser: data.user,
						},
					});
				}
			});
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch({
			type: LOGOUT,
			payload: {
				loggedIn: false,
				currentUser: {},
			},
		});
	};
};
