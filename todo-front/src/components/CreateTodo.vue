<template>
  <div class="create-card">
		<TodoCardDetail
			type="insert"
		/>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import TodoCardDetail from './TodoCardDetail.vue';

export default {
  name: 'CreateTodo',
  props: {
    msg: String
  },
	components: {
		TodoCardDetail
	},
	data () {
		return {
		}
	},
	mounted () {
	},
	methods: {
	}
}
</script>

<style scoped>
.create-card {

}
</style>
