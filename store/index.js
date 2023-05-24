import {} from "~/utils/store/namespace.names";
import {} from "~/utils/store/action.names";
import { namespaced } from "~/utils/utils";

export const state = () => ({});

export const actions = {
	async nuxtServerInit({ dispatch }) {
		// await dispatch(namespaced(NS_COMMON, FETCH_CURRENCY_RATE)).catch((e) => {});
	},
};
