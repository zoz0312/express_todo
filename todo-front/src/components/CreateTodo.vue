<template>
  <div class="create-card">
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
				<b-form-input v-model="title" placeholder="제목을 입력해주세요."></b-form-input>
				<b-form-textarea
					id="textarea"
					v-model="contents"
					placeholder="내용을 입력해주세요."
					rows="3"
					max-rows="6"
				></b-form-textarea>
					<b-form-datepicker id="example-datepicker" v-model="dueDate" class="mb-2"></b-form-datepicker>
					<b-form-select v-model="type" :options="options"></b-form-select>
			</b-card-text>
			<b-button href="#" variant="primary" @click="insertTodo()">Insert</b-button>
		</b-card>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from 'axios';

export default {
  name: 'CreateTodo',
  props: {
    msg: String
  },
	components: {
	},
	data () {
		return {
			title: '',
			contents: '',
			dueDate: '',
			type: 'assign',
			depth: 0,
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
		async insertTodo () {
			const data = {
				title: this.title,
				contents: this.contents,
				dueDate: this.dueDate,
				type: this.type,
				depth: this.depth
			}
			if (this.title === '') {
				alert('제목을 입력해주세요.');
				return;
			}
			if (this.contents === '') {
				alert('내용을 입력해주세요.');
				return;
			}
			if (this.dueDate === '') {
				alert('날짜를 선택해주세요.');
				return;
			}
			try {
				console.log(await axios.post('/todo/create', data));
				this
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
