<template>
	<div class="app">
		<Title></Title>
		<Todo-list></Todo-list>
	</div>
</template>

<script>
	import Title from "./Title";
	import TodoList from "./Todo-list";

	export default {
		components: {
			Title,
			TodoList,
		},
	};
</script>

<style scoped>
	.app {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		margin: 0px auto;
		margin-top: 50px;
		width: 500px;
	}
</style>
