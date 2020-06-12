<template>
	<b-card
		:header="item.title"
		class="text-center"
		:bg-variant="bgVal"
		no-body>
		<b-card-body>
			<b-card-text>{{ item.contents }}</b-card-text>
    </b-card-body>
		<b-list-group flush>
      <b-list-group-item>
				<b-row class="small">
					<b-col sm="4"><b-icon icon="calendar-date"></b-icon> 생성일</b-col>
					<b-col sm="8">{{ timeParser(item.createDate) }}</b-col>
				</b-row>
			</b-list-group-item>
      <b-list-group-item>
				<b-row class="small">
					<b-col sm="4"><b-icon icon="calendar-date"></b-icon> 수정일</b-col>
					<b-col sm="8">{{ timeParser(item.updateDate) }}</b-col>
				</b-row>
			</b-list-group-item>
      <b-list-group-item>
				<b-row class="small">
					<b-col sm="4"><b-icon icon="calendar-date"></b-icon> 마감일</b-col>
					<b-col sm="8">{{ timeParser(item.dueDate) }}</b-col>
				</b-row>
			</b-list-group-item>
    </b-list-group>
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
		timeParser (itemDate) {
			if (!!itemDate === false || itemDate === '') {
				return 'X';
			}
			const obj = new Date(itemDate.split('.')[0]);
			return `${obj.getFullYear()}년 ${obj.getMonth() + 1}월 ${obj.getDate()}일`;
		},
	}
}
</script>

<style scoped>
</style>
