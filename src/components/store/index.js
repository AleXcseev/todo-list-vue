import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: [
			{
				id: "1234",
				title: "Learn Vue",
				performed: false,
				important: false,
			},
			{
				id: "1235",
				title: "Learn Vuex",
				performed: false,
				important: false,
			},
			{
				id: "1236",
				title: "Learn Vue-router",
				performed: false,
				important: false,
			},
		],
	},
	mutations: {
		addTodo({ list }, payload) {
			const dublicate = list.find((item) => {
				return item.title.toLowerCase() === payload.toLowerCase();
			});
			if (payload.trim() && !dublicate) {
				const newTodo = {
					id: Date.now().toString(),
					title: payload,
					performed: false,
					important: false,
				};
				list.push(newTodo);
			}
		},

		deleteTodo({ list }, payload) {
			const index = list.findIndex((item) => item.id === payload);
			const newList = list.splice(index, 1);
			list = newList;
		},

		importantTodo({ list }, payload) {
			list.map((item) => {
				if (item.id === payload) {
					item.important = !item.important;
				}
			});
		},

		doneTodo({ list }, payload) {
			list.map((item) => {
				if (item.id === payload) {
					item.performed = !item.performed;
				}
			});
		},
	},
});
