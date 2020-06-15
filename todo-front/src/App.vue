<template>
	<div id="app">
		<Alert />
		<Top />
		<SelectTodo />
	</div>
</template>

<script>
import Top from './components/Top.vue'
import SelectTodo from './components/SelectTodo.vue'
import Alert from './components/Alert.vue'

export default {
	name: 'App',
	components: {
		Top,
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
