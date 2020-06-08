<template>
  <div>
		<b-button variant="primary" @click="createView = !createView">추가하기</b-button>
		<CreateTodo v-show="createView"/>
  </div>
</template>

<script>
import CreateTodo from './CreateTodo.vue'

export default {
  name: 'HelloWorld',
	components: {
		CreateTodo,
	},
	data () {
		return {
			createView: false,
		}
	},
	mounted () {
	},
}
</script>

<style scoped>
</style>
