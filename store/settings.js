import { GET_SETTINGS } from "~/utils/store/getter.names";
import { FETCH_SETTINGS, SUBSCRIBE } from "~/utils/store/action.names";
import {
	PUBLIC_SETTINGS_ENDPOINT,
	SUBSCRIBE_ENDPOINT,
} from "~/utils/store/endpoints";
import { SET_SETTINGS } from "~/utils/store/mutation.names";

export const state = () => ({
	settings: null,
});

export const getters = {
	[GET_SETTINGS](state) {
		return state.settings;
	},
};

export const actions = {
	async [FETCH_SETTINGS]({ commit, dispatch }) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(PUBLIC_SETTINGS_ENDPOINT)
				.then(({ data }) => {
					commit(SET_SETTINGS, data);
					resolve(data);
				})
				.catch((e) => {
					console.log(e);
					reject(e);
				});
		});
	},
	async [SUBSCRIBE]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.post(SUBSCRIBE_ENDPOINT, payload)
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
	[SET_SETTINGS](state, data) {
		state.settings = data;
	},
};
