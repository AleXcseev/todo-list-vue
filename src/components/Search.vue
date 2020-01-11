<template>
	<div class="search">
		<form>
			<input placeholder="Поиск" v-model="searh" />
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: "",
			};
		},
	};
</script>

<style scoped>
	.search {
		margin-top: 20px;
		width: 100%;
	}
	.search form {
		width: 100%;
	}
	.search form input {
		width: 70%;
		padding: 5px;
	}
</style>
