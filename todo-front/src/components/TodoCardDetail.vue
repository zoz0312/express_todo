<template>
  <div class="create-card">
		ITEM {{ item }}
		<b-card
			title="Card Title"
			img-src="https://picsum.photos/600/300/?image=25"
			img-alt="Image"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-2"
		>
			<b-card-text>
				<b-form-input v-model="item.title" placeholder="제목을 입력해주세요."></b-form-input>
				<b-form-textarea
					id="textarea"
					v-model="item.contents"
					placeholder="내용을 입력해주세요."
					rows="3"
					max-rows="6"
				></b-form-textarea>
					<b-form-datepicker id="example-datepicker" v-model="item.dueDate" class="mb-2"></b-form-datepicker>
					<b-form-select v-model="item.type" :options="options"></b-form-select>
			</b-card-text>
			<b-button href="#" variant="primary" @click="todoSubmit()">{{ btnName }}</b-button>
		</b-card>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from 'axios';

export default {
  name: 'TodoCardDetail',
  props: {
		type: {
			type: String,
			default: 'insert'
		},
		item: {
			type: Object,
			default: () => {
				return {
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
		if (this.type === 'insert') {
			this.btnName = 'Insert';
		}
	},
	methods: {
		async todoSubmit () {
			const data = {
				title: this.item.title,
				contents: this.item.contents,
				dueDate: this.item.dueDate,
				type: this.item.type,
				depth: this.item.depth
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
				if (this.type === 'insert') {
					console.log(await axios.post('/todo/create', data));
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
