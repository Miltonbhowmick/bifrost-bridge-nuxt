import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

for (let [rule, validation] of Object.entries(rules)) {
	// noinspection TypeScriptValidateTypes
	extend(rule, {
		...validation,
	});
}
