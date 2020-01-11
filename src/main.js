import Vue from "vue";
import App from "../src/components/App";
import store from "./components/store/";

new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");
