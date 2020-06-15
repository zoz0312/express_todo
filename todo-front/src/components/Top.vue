<template>
  <div>
		<b-button variant="warning" @click="viewAlram()" class="mr-3">
			<b-icon icon="alarm"></b-icon>
			{{ $store.state.alram.dueCnt }}
		</b-button>
		<AlramList />
		<b-button variant="primary" @click="btnAdd()">추가하기</b-button>
		<TodoCardDetail />
  </div>
</template>

<script>
import axios from 'axios';
import TodoCardDetail from './TodoCardDetail.vue';
import AlramList from './Alram/AlramList.vue';

export default {
  name: 'Top',
	components: {
		TodoCardDetail,
		AlramList
	},
	data () {
		return {
			alramCount: 0,
		}
	},
	mounted () {
		this.$store.dispatch('get_alram');
	},
	methods: {
		btnAdd () {
			this.$store.dispatch('insert_card');
		},
		viewAlram () {
		},
	}
}
</script>

<style scoped>
</style>
