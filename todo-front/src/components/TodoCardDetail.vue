<template>
	<b-modal
		id="detail-modal"
		v-model="$store.state.todo.view"
		hide-backdrop
		content-class="shadow"
		title="TODO 작성">
		<b-card-text>
			<b-form-input v-model="$store.state.todo.title" placeholder="제목을 입력해주세요."></b-form-input>
			<b-form-textarea
				id="textarea"
				v-model="$store.state.todo.contents"
				placeholder="내용을 입력해주세요."
				rows="3"
				max-rows="6"
			></b-form-textarea>
			<b-form-datepicker id="example-datepicker" v-model="$store.state.todo.dueDate" class="mb-2"></b-form-datepicker>
			<b-form-select v-model="$store.state.todo.type" :options="options"></b-form-select>
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
/*eslint no-unused-vars: "error"*/
import axios from 'axios';

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
			]
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
				depth: st.depth
			}
			if (data.title === '') {
				alert('제목을 입력해주세요.');
				return;
			}
			if (data.contents === '') {
				alert('내용을 입력해주세요.');
				return;
			}
			if (data.dueDate === '') {
				alert('날짜를 선택해주세요.');
				return;
			}
			try {
				const viewType = this.$store.state.todo.viewType;
				if (viewType === 'insert') {
					await axios.post('/todo/create', data);
				} else if (viewType === 'fix') {
					await axios.post('/todo/update', data);
				}
			} catch (e) {
				console.log('err', e);
			}
		},
	}
}
</script>

<style scoped>
</style>
