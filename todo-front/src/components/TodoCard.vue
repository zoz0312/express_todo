<template>
	<b-card
		class="text-center todo-card"
		:bg-variant="bgVal"
		no-body>
    <template v-slot:header>
			<h4 class="item-title mb-0">
				{{ parseText(item.title, 'title') }}
			</h4>
    </template>
		<b-card-body>
			<b-card-text class="item-contents">
				{{ parseText(item.contents, 'contents') }}
			</b-card-text>
    </b-card-body>
		<b-list-group flush>
      <b-list-group-item class="item-list py-1">
				<b-row class="small">
					<b-col sm="4" class="p-0">우선순위</b-col>
					<b-col sm="8" class="p-0">{{ parseDepth(item.depth) }}</b-col>
				</b-row>
			</b-list-group-item>
      <b-list-group-item class="item-list py-1">
				<b-row class="small">
					<b-col sm="4" class="p-0"><b-icon icon="calendar-date"></b-icon> 생성일</b-col>
					<b-col sm="8" class="p-0">{{ timeParser(item.createDate) }}</b-col>
				</b-row>
			</b-list-group-item>
      <b-list-group-item class="item-list py-1">
				<b-row class="small">
					<b-col sm="4" class="p-0"><b-icon icon="calendar-date"></b-icon> 수정일</b-col>
					<b-col sm="8" class="p-0">{{ timeParser(item.updateDate) }}</b-col>
				</b-row>
			</b-list-group-item>
      <b-list-group-item class="item-list py-1">
				<b-row class="small">
					<b-col sm="4" class="p-0"><b-icon icon="calendar-date"></b-icon> 마감일</b-col>
					<b-col sm="8" class="p-0">{{ timeParser(item.dueDate) }}</b-col>
				</b-row>
			</b-list-group-item>
    </b-list-group>
		<template v-slot:footer>
			<div>
				<b-button-group class="float-right btn-group">
					<b-button
						size="sm"
						variant="primary"
						@click="showDetail()">
						수정하기
					</b-button>
					<b-button
						size="sm"
						variant="primary"
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
				const rtn = await axios.post('/todo/delete', { id: this.item.id });
				if (rtn.data.success) {
					this._alert(`삭제 되었습니다.`);
					this.$store.dispatch('get_todos');
					this.$store.dispatch('get_alram');
				} else {
					this._alert(`${rtn.data.errDesc}`, 'danger');
				}
			} catch (e) {
				this._alert(`Post Fail - ${e.name} : ${e.message}`, 'danger');
			}
		},
		parseDepth (val) {
			let text = '';
			switch (val) {
				case 0: text = '높음'; break;
				case 1: text = '중간'; break;
				case 2: text = '낮음'; break;
			}
			return text;
		},
		parseText (val, type) {
			const max = type === 'title' ? 10 : 20;
			let text = val;
			if (text.length >= max) {
				text = text.slice(0, max);
				text += '..';
			}
			return text;
		}
	}
}
</script>

<style scoped>
@media (max-width: 992px) {
	.item-title {
		padding: .5rem 0.75rem;
		font-size: 1rem;
	}
	.item-contents {
		font-size: 0.5rem;
	}
	.item-list {
		font-size: 0.5rem;
	}
	.btn-group > button {
		font-size: 0.8rem;
		line-height: 1;
		padding: .2rem .4rem;
	}
}
@media (max-width: 576px) {
	.item-title {
		padding: .75rem 1.25rem;
		font-size: 1.5rem;
	}
	.item-contents {
		font-size: 1rem;
	}
	.item-list {
		font-size: 1rem;
	}
	.item-list > div > div:nth-child(1) {
		font-weight: bold;
	}
	.btn-group > button {
		font-size: 1rem;
		line-height: 1.5;
		padding: .375rem 1.5rem;
	}
}
</style>
