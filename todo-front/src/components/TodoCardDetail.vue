<template>
	<b-modal
		id="detail-modal"
		v-model="$store.state.todo.view"
		hide-backdrop
		centered
		content-class="shadow"
		title="TODO 작성">
		<b-card-text>
			<b-row class="mb-2">
				<b-col sm="3" class="my-auto">제목</b-col>
				<b-col sm="9">
					<b-form-input v-model="$store.state.todo.title" placeholder="제목을 입력해주세요."></b-form-input>
				</b-col>
			</b-row>
			<b-row class="mb-2">
				<b-col sm="3" class="my-auto">내용</b-col>
				<b-col sm="9">
					<b-form-textarea
						id="textarea"
						v-model="$store.state.todo.contents"
						placeholder="내용을 입력해주세요."
						rows="3"
						max-rows="6"
					></b-form-textarea>
				</b-col>
			</b-row>
			<b-row class="mb-2">
				<b-col sm="3" class="my-auto">마감 기한</b-col>
				<b-col sm="9">
					<div class="due-date">
						<b-form-datepicker id="due-date-picker" v-model="$store.state.todo.dueDate" class="mb-2"></b-form-datepicker>
					</div><div class="btn-due-date">
						<button type="button" aria-label="remove" class="close" @click="$store.dispatch('clear_due_date')">×</button>
					</div>
				</b-col>
			</b-row>
			<b-row class="mb-2">
				<b-col sm="3" class="my-auto">상태</b-col>
				<b-col sm="9">
					<b-form-select v-model="$store.state.todo.type" :options="options"></b-form-select>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="3" class="my-auto">우선순위</b-col>
				<b-col sm="9">
					<b-form-input id="range-1" v-model="$store.state.todo.depth" type="range" min="0" max="2"></b-form-input>
					{{ depOptions[$store.state.todo.depth] }}
				</b-col>
			</b-row>
		</b-card-text>
		<template v-slot:modal-footer>
			<div class="w-100">
				<b-button-group class="float-right">
					<b-button href="#" variant="primary" @click="todoSubmit()">{{ $store.state.todo.viewType === 'insert' ? '생성' : '수정' }}</b-button>
					<b-button
						variant="primary"
						@click="$store.dispatch('view_type', false)">
						닫기
					</b-button>
				</b-button-group>
			</div>
		</template>
  </b-modal>
</template>

<script>
import axios from 'axios';
import CommonMixin from '../mixin';

export default {
  name: 'TodoCardDetail',
  props: {
		item: {
			type: Object,
			default: () => {
				return {
					id: '',
					title: '',
					contents: '',
					dueDate: '',
					type: 'assign',
					depth: 0,
				}
			}
		},
  },
	mixins: [ CommonMixin ],
	components: {
	},
	data () {
		return {
			btnName: '',
			options: [
				{ value: 'assign', text: '할당' },
				{ value: 'ongoing', text: '진행중' },
				{ value: 'complete', text: '완료' },
				{ value: 'holding', text: '보류' },
			],
			depOptions: [ '높음', '중간', '낮음', ]
		}
	},
	mounted () {
	},
	methods: {
		async todoSubmit () {
			const st = this.$store.state.todo;
			const data = {
				id: st.id,
				title: st.title,
				contents: st.contents,
				dueDate: st.dueDate,
				type: st.type,
				depth: parseInt(st.depth, 10),
			}
			if (data.title === '') {
				alert('제목을 입력해주세요.');
				return;
			}
			if (data.contents === '') {
				alert('내용을 입력해주세요.');
				return;
			}
			try {
				const viewType = this.$store.state.todo.viewType;
				let rtn = {};
				if (viewType === 'insert') {
					rtn = await axios.post('/todo/create', data);
				} else if (viewType === 'fix') {
					rtn = await axios.post('/todo/update', data);
				}
				if (rtn.data.success) {
					if (viewType === 'insert') {
						this._alert(`생성 되었습니다.`);
					} else if (viewType === 'fix') {
						this._alert(`수정 되었습니다.`);
					}
				} else {
					this._alert(`${rtn.data.errDesc}`, 'danger');
				}
				this.$store.dispatch('view_type', false);
				this.$store.dispatch('get_todos');
				this.$store.dispatch('get_alram');
			} catch (e) {
				this._alert(`Post Fail - ${e.name} : ${e.message}`, 'danger');
			}
		},
	}
}
</script>

<style scoped>
.due-date {
	display: inline-block;
	width: 90%;
}
.btn-due-date {
	display: inline-block;
	width: 10%;
	height: 40%;
}
.btn-due-date > button {
	margin-right: 20%;
}
</style>
