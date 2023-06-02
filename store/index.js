import { NS_SETTINGS } from "~/utils/store/namespace.names";
import { FETCH_SETTINGS } from "~/utils/store/action.names";
import { namespaced } from "~/utils/utils";

export const state = () => ({});

export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch(namespaced(NS_SETTINGS, FETCH_SETTINGS)).catch((e) => {});
	},
};
