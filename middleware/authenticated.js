export default function ({ store, redirect, route }) {
	const currentRoute = route.name;
	const token = store.getters["user/getToken"];
	const unauthRouteName = [
		"signin",
		"signup",
		"reset-password",
		"validate-otp",
		"forgot-password",
		"premium",
	];
	const match = unauthRouteName.includes(currentRoute);

	if (match === false) {
		if (token === null) {
			return redirect("/signin");
		}
	} else {
		if (token !== null) {
			if (currentRoute == "premium") {
			} else {
				return redirect("/");
			}
		}
	}
}
