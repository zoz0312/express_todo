<template>
  <div class="select-view">
		<b-container fluid>
			<b-row>
				<b-col sm="3"
					v-for="(opt) in options"
					v-bind:key="opt.value">
					<div class="type-title">
						{{ opt.text }}
					</div>
					<div
						class="mb-3"
						v-for="(item, idx) in $store.state.todo.itemList[opt.value]"
						v-bind:key="idx"
						>
						<TodoCard
							v-if="opt.value === item.type"
							:item="item"
							:bgVal="bgVal(item.type, item.dueDate)"
						/>
					</div>
				</b-col>
			</b-row>
		</b-container>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import TodoCard from './TodoCard.vue';

export default {
  name: 'SelectTodo',
  props: {
    msg: String
  },
	components: {
		TodoCard,
	},
	data () {
		return {
			curDate: '',
			options: [
				{ value: 'assign', text: '할당' },
				{ value: 'ongoing', text: '진행중' },
				{ value: 'complete', text: '완료' },
				{ value: 'holding', text: '보류' },
			],
		}
	},
	mounted () {
		this.$store.dispatch('get_todos');
		this.curDate = new Date();
	},
	methods: {
		bgVal (type, due) {
			if (type === 'assign' || type === 'ongoing') {
				if (this.curDate > new Date(due)) {
					return 'warning';
				}
			}
			return '';
		},
	}
}
</script>

<style scoped>
.type-title {
	font-size: 1.2rem;
	font-weight: bold;
	color: #0073d1;
	border-bottom: 2px solid #0073d1;
	margin-bottom: 15px;
}
</style>
