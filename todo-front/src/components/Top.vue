<template>
  <div class="top">
		<b-row class="top-row">
			<b-col md="4" class="top-col">
				<div class="title">Erpper TODO</div>
			</b-col><b-col md="3" class="ml-auto top-col text-right" align-v="center">
				<div class="top-btn">
					<b-button-group class="btn-group">
						<b-button variant="warning" @click="$store.dispatch('is_alram_show')">
							<b-icon icon="alarm"></b-icon>
							{{ $store.state.alram.dueCnt }}
						</b-button>
						<b-dropdown size="sm"  variant="light" toggle-class="text-decoration-none" no-caret>
							<template v-slot:button-content>
								&#x1f50d;<span class="sr-only">Search</span>
							</template>
							<div
								v-for="(item, idx) in filter"
								v-bind:key="idx">
								<b-dropdown-item @click="getTodosDepth(item.value)">{{ item.text }}</b-dropdown-item>
							</div>

						</b-dropdown>
						<b-button variant="info" @click="btnAdd()">추가하기</b-button>
					</b-button-group>
				</div>
			</b-col>
		</b-row>
  </div>
</template>

<script>
export default {
  name: 'Top',
	components: {
	},
	data () {
		return {
			filter: [
				{ text: '우선순위 - 전체', value: -1 },
				{ text: '우선순위 - 높음', value: 0 },
				{ text: '우선순위 - 중간', value: 1 },
				{ text: '우선순위 - 낮음', value: 2 },
			]
		}
	},
	mounted () {
		this.$store.dispatch('get_alram');
	},
	methods: {
		btnAdd () {
			this.$store.dispatch('insert_card');
		},
		getTodosDepth (val) {
			this.$store.dispatch('get_todos', val);
		}
	}
}
</script>

<style scoped>
.top {
	height: 60px;
	background-color: #0073d1;
}
.top-row {
	margin-right: 0;
}
.title {
	display: inline-block;
	padding-top: 10px;
	padding-left: 10px;
	font-size: 1.4rem;
	color: #EEEEEE;
}
.top-btn {
	display: inline-block;
	padding-top: 10px;
	padding-right: 10px;
}
@media (max-width: 767px) {
	.title {
		padding-top: 17px;
		font-size: 1rem;
	}
	.top-col {
		width: 50%;
	}
}
@media (max-width: 992px) {
	.btn-group > button {
		font-size: 0.8rem;
		line-height: 1;
		padding: .2rem .4rem;
	}
}
</style>
