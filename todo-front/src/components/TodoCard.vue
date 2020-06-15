<template>
	<b-card
		class="text-center todo-card"
		:bg-variant="bgVal"
		no-body>
    <template v-slot:header>
			<h4 class="mb-0">
				{{ item.title }}
			</h4>
    </template>
		<b-card-body>
			<b-card-text>
				{{ item.contents }}
			</b-card-text>
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
		<template v-slot:footer>
			<div>
				<b-button-group class="float-right">
					<b-button
						variant="primary"
						@click="showDetail()">
						수정하기
					</b-button>
					<b-button
						variant="warning"
						@click="deleteTodo()">
						삭제하기
					</b-button>
				</b-button-group>
			</div>
		</template>
	</b-card>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from 'axios';
import CommonMixin from '../mixin';

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
	mixins: [ CommonMixin ],
	components: {
	},
	data () {
		return {
			iconStr: 'x-square'
		}
	},
	mounted () {
	},
	methods: {
		showDetail () {
			this.$store.dispatch('update_card', {
				viewType: 'fix',
				...this.item
			});
		},
		async deleteTodo () {
			if (!confirm('Is Remove?')) {
				return;
			}
			try {
				await axios.post('/todo/delete', { id: this.item.id });
			} catch (e) {
				console.log('err', e);
			}
		}
	}
}
</script>

<style scoped>
.todo-card {
	cursor: pointer;
}
</style>
