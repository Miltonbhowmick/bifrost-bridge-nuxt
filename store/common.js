import {} from "~/utils/store/getter.names";
import { FETCH_CURRENT_PAGE } from "~/utils/store/action.names";
import { PAGE_API_ROOT } from "~/utils/store/endpoints";
import {} from "~/utils/store/mutation.names";
import { namespaced, buildParams } from "~/utils/utils";
import { NS_COMMON } from "~/utils/store/namespace.names";

export const state = () => ({});

export const getters = {};

export const actions = {
	async [FETCH_CURRENT_PAGE]({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios
				.get(`${PAGE_API_ROOT}/find/${buildParams(payload)}`)
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

export const mutations = {};
