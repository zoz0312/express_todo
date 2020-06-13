<template>
  <div>
		<b-button variant="primary" @click="btnAdd()">추가하기</b-button>
		<TodoCardDetail
			v-show="$store.state.todo.view"
		/>
  </div>
</template>

<script>
import TodoCardDetail from './TodoCardDetail.vue';

export default {
  name: 'Top',
	components: {
		TodoCardDetail,
	},
	data () {
		return {
			createView: false,
		}
	},
	mounted () {
	},
	methods: {
		btnAdd () {
			this.$store.dispatch('insert_card');
		}
	}
}
</script>

<style scoped>
</style>
