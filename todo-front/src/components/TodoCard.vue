<template>
	<b-card :header="item.title" class="text-center" :bg-variant="bgVal">
		<b-card-text>
			{{ item.contents }}
			{{ item.createDate }}
			{{ item.updateDate }}
			{{ item.dueDate }}
		</b-card-text>
	</b-card>
</template>

<script>
/*eslint no-unused-vars: "error"*/
export default {
  name: 'TodoCard',
  props: {
    msg: String,
		bgVal: {
			type: String,
			default: ''
		},
		item: {
			type: Object,
			default: () => {
				return {
					id: 0,
					title: '',
					type: '',
					createDate: '',
					updateDate: '',
					dueDate: '',
				}
			}
		},
  },
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
