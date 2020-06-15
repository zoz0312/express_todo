<template>
	<div>
		<b-alert
			dismissible
			v-model="$store.state.alert.view"
			:variant="$store.state.alert.style">
			{{ $store.state.alert.comments }}
		</b-alert>
	</div>
</template>

<script>
export default {
  name: 'Alert',
	components: {
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
</style>
