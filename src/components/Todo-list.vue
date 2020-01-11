<template>
	<div>
		<form class="todo-list" @submit.prevent="addTodo">
			<input v-model="title" placeholder="Введите задачу" />
			<button>Создать</button>
		</form>
		<div class="list">
			<ul>
				<li v-for="item in changeList" :key="item.id">
					<Todo-item :item="item" @delete-todo="deleteTodo"></Todo-item>
				</li>
			</ul>
		</div>
		<Search></Search>
	</div>
</template>

<script>
	import TodoItem from "./Todo-item";
	import Search from "./Search";

	export default {
		components: {
			TodoItem,
			Search,
		},
		data() {
			return {
				title: "",
				changeList: "",
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
			};
		},
		created() {
			this.changeList = this.list;
		},
		methods: {
			addTodo() {
				const dublicate = this.list.find((item) => {
					return item.title === this.title;
				});
				if (this.title.trim() && !dublicate) {
					const newTodo = {
						id: Date.now().toString(),
						title: this.title,
						performed: false,
						important: false,
					};
					this.title = "";
					this.list.push(newTodo);
				}
			},
			deleteTodo(id) {
				this.list = this.list.filter((item) => item.id !== id);
			},
		},
	};
</script>

<style scoped>
	.todo-list {
		display: flex;
		justify-content: space-around;
		width: 100%;
		margin-bottom: 20px;
	}
	.todo-list > input {
		width: 80%;
		margin-right: 20px;
		padding: 5px;
	}
	.todo-list > button {
		width: 20%;
	}
	.list > ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0;
		padding: 0;
	}
	.list {
		height: 300px;
		overflow: auto;
		border-bottom: 1px solid #000;
	}
</style>
