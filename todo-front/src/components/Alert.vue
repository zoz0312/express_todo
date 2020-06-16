<template>
	<div class="alert-div">
		<b-alert
			dismissible
			class="alert"
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
.alert-div {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1500;
}
.alert-div > .alert {
	margin: 20px;
}
</style>
