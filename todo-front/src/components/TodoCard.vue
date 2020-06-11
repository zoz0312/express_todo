<template>
	<b-card :header="item.title" class="text-center" :bg-variant="bgVal">
		<b-card-text>
			<b-card-text>{{ item.contents }}</b-card-text>
			<b-card-text>생성일: {{ timeParser(item.createDate) }}</b-card-text>
			<b-card-text>수정일: {{ timeParser(item.updateDate) }}</b-card-text>
			<b-card-text>마감일: {{ timeParser(item.dueDate) }}</b-card-text>
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
		timeParser (date) {
			if (!!date === false || date === '') {
				return 'X';
			}
			const obj = new Date(date);
			const y = obj.getFullYear();
			const m = obj.getMonth();
			const d = obj.getDay();

			return `${y}년 ${m}월 ${d}일`;
		},
	}
}
</script>

<style scoped>
</style>
