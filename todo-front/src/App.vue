<template>
	<div>
		<Top />
		<b-container id="app">
			<AlramList />
			<TodoCardDetail />
			<Alert />
			<SelectTodo />
		</b-container>
	</div>
</template>

<script>
import Top from './components/Top.vue'
import AlramList from './components/Alram/AlramList.vue';
import TodoCardDetail from './components/TodoCardDetail.vue';
import SelectTodo from './components/SelectTodo.vue'
import Alert from './components/Alert.vue'

export default {
	name: 'App',
	components: {
		Top,
		AlramList,
		TodoCardDetail,
		SelectTodo,
		Alert,
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
