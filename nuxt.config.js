export default {
	// server: {
	// 	host: "0.0.0.0", // default: localhost
	// },
	target: "server",
	head: {
		title: "Home",
		titleTemplate: "Bifrost | %s",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				hid: "viewport",
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", property: "description", content: "" },
			{ property: "format-detection", content: "telephone=no" },
			{
				hid: "og:type",
				property: "og:type",
				content: "",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "",
			},
			{
				hid: "og:description",
				property: "og:description",
				content: "",
			},
			{
				hid: "og:url",
				property: "og:url",
				content: "",
			},
			{
				hid: "og:site_name",
				property: "og:site_name",
				content: "",
			},
			{
				hid: "Keywords",
				property: "Keywords",
				content: "",
			},
			{
				hid: "Description",
				property: "Description",
				content: "",
			},
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				sizes: "8x8",
				href: "/bifrost_favicon.ico",
			},
			{ rel: "stylesheet", href: "/css/bootstrap.min.css" },
			{
				rel: "stylesheet",
				href: "https://cdn.jsdelivr.net/npm/animate.css",
			},
		],
		script: [{ type: "text/javascript", src: "/js/bootstrap.min.js" }],
	},

	env: {
		HOST:
			process.env.VUE_APP_STATIC_HOST ||
			process.env.VUE_APP_DEVHOST ||
			process.env.VUE_APP_DEVBROWSERHOST ||
			"http://localhost:8000",
		SITE_URL: process.env.VUE_APP_SITE_URL || "http://localhost:3000",
	},

	publicRuntimeConfig: {
		HOST:
			process.env.VUE_APP_STATIC_HOST ||
			process.env.VUE_APP_DEVBROWSERHOST ||
			process.env.VUE_APP_DEVHOST ||
			"http://localhost:3000",
		SITE_URL: process.env.VUE_APP_SITE_URL || "http://localhost:3000",
	},

	css: ["~/assets/css/main.scss"],

	styleResources: {
		scss: ["~/assets/css/_config.scss"],
	},

	plugins: [
		{
			src: "~/plugins/vue-otp-input.js",
			ssr: false,
		},
		{
			src: "~/plugins/validate.js",
			ssr: false,
		},
		{
			src: "~/plugins/vue-toast-notification.js",
			mode: "client",
		},
		{
			src: "~/plugins/clickaway.js",
			ssr: false,
		},
		{
			src: "~/plugins/vue-debounce.js",
			ssr: false,
		},
	],

	components: true,

	// router: {
	// 	middleware: "authenticated",
	// },

	buildModules: ["@nuxtjs/style-resources", "@nuxtjs/fontawesome"],

	modules: ["@nuxtjs/axios", "@nuxtjs/dayjs", "cookie-universal-nuxt"],

	fontawesome: {
		component: "Fa",
		suffix: false,
		icons: {
			solid: true,
			brands: true,
		},
	},

	dayjs: {
		plugins: ["utc"],
	},

	axios: {
		baseURL: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
		browserBaseURL:
			process.env.VUE_APP_DEVBROWSERHOST ||
			process.env.VUE_APP_DEVHOST ||
			"http://localhost:8000",
		prefix: "/",
	},

	build: {
		transpile: ["vee-validate/dist/rules"],
		extend(config, ctx) {
			// ...
		},
	},
};
