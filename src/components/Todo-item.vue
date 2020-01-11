<template>
	<div class="todo">
		<span :class="{ done: item.performed, important: item.important }">
			{{ item.title }}
		</span>
		<button @click="doneTodo">Выполнено</button>
		<button @click="importantTodo">Важное</button>
		<button @click="$emit('delete-todo', item.id)">Удалить</button>
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
			importantTodo() {
				this.item.important = !this.item.important;
			},
			doneTodo() {
				this.item.performed = !this.item.performed;
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
