<template>
	<div class="todo">
		<span :class="{ done: item.performed, important: item.important }">
			{{ item.title }}
		</span>
		<button @click="done">Выполнено</button>
		<button @click="important">Важное</button>
		<button @click="deleteTodoItem">Удалить</button>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
			},
		},
		methods: {
			done() {
				this.$store.commit("doneTodo", this.item.id);
			},
			important() {
				this.$store.commit("importantTodo", this.item.id);
			},
			deleteTodoItem() {
				this.$store.commit("deleteTodo", this.item.id);
			},
		},
	};
</script>

<style scoped>
	.todo {
		display: flex;
		justify-content: space-around;
		padding: 10px;
		margin-top: 10px;
		border: 1px solid #f39c12;
		margin: 10px 15px;
	}
	.todo > span {
		width: 70%;
		text-align: start;
	}
	.done {
		text-decoration: line-through;
		opacity: 0.5;
	}
	.important {
		font-weight: bold;
		color: #c0392b;
	}
</style>
