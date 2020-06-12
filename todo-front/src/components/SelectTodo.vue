<template>
  <div class="select-view">
		<b-container fluid>
			<b-row>
				<b-col sm="3"
					v-for="(opt) in options"
					v-bind:key="opt.value">
					<b-alert show variant="primary">{{ opt.text }}</b-alert>
					<div
						class="mb-3"
						v-for="(item, idx) in listType[opt.value]"
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
		{{ TEST }}
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from 'axios';

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
			TEST: '123',
			curDate: '',
			options: [
				{ value: 'assign', text: '할당' },
				{ value: 'ongoing', text: '진행중' },
				{ value: 'complete', text: '완료' },
				{ value: 'holding', text: '보류' },
			],
			listType: {
				assign: [],
				ongoing: [],
				complete: [],
				holding: []
			},
		}
	},
	mounted () {
		this.selectTodo();
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
		async selectTodo () {
			try {
				const { data } = await axios.post('/todo/select');
				const items = data.data.items;
				for (let i=0; i<items.length; i++) {
					this.listType[items[i].type].push(items[i]);
				}
			} catch (e) {
				console.log('err', e);
			}
		},
	}
}
</script>

<style scoped>
.create-card {

}
</style>
