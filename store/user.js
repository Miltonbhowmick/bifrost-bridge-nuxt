import { USERS_ENDPOINT } from "~/utils/store/endpoints";
import {
	SIGNIN,
	SIGNUP,
	SIGNOUT,
	GOOGLE_SIGNUP,
	FACEBOOK_SIGNUP,
	GET_SIGNUP_DATA_FROM_LOCAL_STORAGE,
	GET_TOKEN_FROM_LOCAL_STORE,
	PROFILE,
	VERIFICATION_CONFIRM,
	SEND_VERIFICATION_CODE,
	FORGET_PASSWORD,
	VERIFY_CODE_FOR_FORGET_PASSWORD,
} from "../utils/store/action.names";
import {
	SET_TOKEN_ERROR,
	SET_TOKEN,
	SET_PROFILE,
	SET_SIGNUP_DATA,
	REMOVE_SIGNUP_DATA,
} from "../utils/store/mutation.names";
import {
	GET_SIGNUP_DATA,
	GET_PROFILE,
	GET_AUTH_HEADER,
	GET_TOKEN,
} from "../utils/store/getter.names";
import {} from "../utils/store/endpoints";
import { NS_USER } from "~/utils/store/namespace.names";
import { namespaced, buildParams } from "../utils/utils";

export const state = () => ({
	user: {
		token: null,
		profile: null,
	},
	signUpData: null,
	error: false,
});

export const getters = {
	[GET_SIGNUP_DATA](state) {
		return state.signUpData;
	},
	[GET_PROFILE](state) {
		return state.user.profile;
	},
	[GET_TOKEN](state) {
		return state.user.token;
	},
	[GET_AUTH_HEADER](state) {
		if (state.user.token == null) return null;
		return { Authorization: `Token ${state.user.token}` };
	},
};

export const actions = {
	async [SIGNIN]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/signin/`, payload)
				.then(({ data }) => {
					if (!payload.type) {
						commit(SET_TOKEN, data.token);
						commit(SET_PROFILE, data);
					}
					resolve(data);
				})
				.catch((e) => {
					if (!payload.type) {
						commit(SET_TOKEN_ERROR);
					}
					console.log(e);
					reject(e);
				});
		});
	},
	async [SIGNUP]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/signup/`, payload)
				.then(({ data }) => {
					commit(SET_SIGNUP_DATA, JSON.stringify(payload));
					resolve(data);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	async [GET_SIGNUP_DATA_FROM_LOCAL_STORAGE]({ commit, dispatch }) {
		return new Promise((resolve, reject) => {
			var localData = localStorage.getItem("BIFROST_SIGNUP_DATA");
			if (localData != null) {
				commit(SET_SIGNUP_DATA, localData);
				resolve();
			} else {
				localData = null;
				commit(SET_SIGNUP_DATA, localData);
				reject();
			}
		});
	},
	async [SEND_VERIFICATION_CODE]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/send_verification_code/`, payload)
				.then(({ data }) => {
					resolve(data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	},
	async [VERIFICATION_CONFIRM]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/verify_code/`, payload)
				.then(({ data }) => {
					console.log(data);
					commit(SET_TOKEN, data.token);
					commit(SET_PROFILE, data);
					commit(REMOVE_SIGNUP_DATA);
					resolve(data);
				})
				.catch((e) => {
					console.log(e.response);
					reject(e);
				});
		});
	},
	async [GET_TOKEN_FROM_LOCAL_STORE]({ commit, dispatch }) {
		return new Promise((resolve, reject) => {
			const localToken = this.$cookies.get("BIFROST_TOKEN");
			if (localToken != null) {
				commit(SET_TOKEN, localToken);
				resolve(localToken);
			} else {
				console.log("TOKEN FROM LOCAL STORE ERROR");
				reject("Local Token Error");
			}
		});
	},
	async [PROFILE]({ commit, getters }, payload) {
		return new Promise((resolve, reject) => {
			if (payload && payload.token) {
				this.$axios
					.get(`${USERS_ENDPOINT}/profile/`, {
						headers: {
							Authorization: `Token ${payload.token}`,
						},
					})
					.then(({ data }) => {
						commit(SET_PROFILE, data);
						resolve(data);
					})
					.catch((e) => {
						commit(SET_TOKEN_ERROR);
						console.log(e);
						reject(e);
					});
			} else {
				this.$axios
					.get(`${USERS_ENDPOINT}/profile/`, {
						headers: {
							...getters[GET_AUTH_HEADER],
						},
					})
					.then(({ data }) => {
						commit(SET_PROFILE, data);
						resolve(data);
					})
					.catch((e) => {
						commit(SET_TOKEN_ERROR);
						console.log(e);
						reject(e);
					});
			}
		});
	},
	async [VERIFY_CODE_FOR_FORGET_PASSWORD]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/verify_code_for_forget_password/`, payload)
				.then(({ data }) => {
					resolve(data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	},
	async [FORGET_PASSWORD]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(`${USERS_ENDPOINT}/forget_password/`, payload)
				.then(({ data }) => {
					resolve(data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	},
};

export const mutations = {
	[SET_SIGNUP_DATA](state, data) {
		state.signUpData = JSON.parse(data);
		localStorage.setItem("BIFROST_SIGNUP_DATA", data);
	},
	[REMOVE_SIGNUP_DATA](state, data) {
		localStorage.removeItem("BIFROST_SIGNUP_DATA");
	},
	[SET_TOKEN](state, token) {
		state.user.token = token;
		state.error = false;
		this.$cookies.set("BIFROST_TOKEN", token, {
			path: "/",
			maxAge: 60 * 60 * 24 * 365,
		});
	},
	[SET_TOKEN_ERROR](state) {
		state.user.token = null;
		state.user.profile = null;
		state.error = true;
		this.$cookies.remove("BIFROST_TOKEN");
	},
	[SET_PROFILE](state, data) {
		state.user.profile = data;
	},
};
