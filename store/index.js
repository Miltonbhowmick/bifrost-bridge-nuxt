import { NS_SETTINGS, NS_USER } from "~/utils/store/namespace.names";
import {
	FETCH_SETTINGS,
	PROFILE,
	GET_TOKEN_FROM_LOCAL_STORE,
} from "~/utils/store/action.names";
import { namespaced } from "~/utils/utils";

export const state = () => ({});

export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch(namespaced(NS_USER, GET_TOKEN_FROM_LOCAL_STORE)).catch(
			(e) => {}
		);
		await dispatch(namespaced(NS_SETTINGS, FETCH_SETTINGS)).catch((e) => {});
		await dispatch(namespaced(NS_USER, PROFILE)).catch((e) => {});
	},
};
