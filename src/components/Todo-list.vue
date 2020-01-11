<template>
	<div>
		<form class="todo-list" @submit.prevent="addTodo(title)">
			<input v-model="title" placeholder="Введите задачу" />
			<button>Создать</button>
		</form>
		<div class="list">
			<ul>
				<li v-for="item in renderList" :key="item.id">
					<Todo-item :item="item"></Todo-item>
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
			};
		},
		computed: {
			renderList() {
				return this.$store.state.list;
			},
		},
		methods: {
			addTodo(title) {
				this.$store.commit("addTodo", title);
				this.title = "";
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
