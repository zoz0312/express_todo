<template>
  <div class="select-view">
		{{ list }}
		<b-container fluid>
			<b-row>
				<b-col sm="3">
					<div>
						
					</div>
				</b-col><b-col sm="3">
					<div>

					</div>
				</b-col><b-col sm="3">
					<div>

					</div>
				</b-col><b-col sm="3">
					<div>

					</div>
				</b-col>
			</b-row>
		</b-container>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
import axios from 'axios';

export default {
  name: 'SelectTodo',
  props: {
    msg: String
  },
	components: {
	},
	data () {
		return {
			list: [],
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
		this.selectTodo();
	},
	methods: {
		async selectTodo () {
			try {
				const { data } = await axios.post('/todo/select');
				for (let i=0; i<data.length; i++) {
					console.log(data[i]);
				}
				this.list = data;
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
