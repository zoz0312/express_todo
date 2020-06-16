<template>
  <div class="top">
		<b-row class="top-row">
			<b-col md="4" class="top-col">
				<div class="title">Erpper TODO</div>
			</b-col><b-col md="3" class="ml-auto top-col text-right" align-v="center">
				<div class="top-btn">
					<b-button variant="warning" @click="$store.dispatch('is_alram_show')" class="mr-3">
						<b-icon icon="alarm"></b-icon>
						{{ $store.state.alram.dueCnt }}
					</b-button>
					<b-button variant="info" @click="btnAdd()">추가하기</b-button>
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
		}
	},
	mounted () {
		this.$store.dispatch('get_alram');
	},
	methods: {
		btnAdd () {
			this.$store.dispatch('insert_card');
		},
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
</style>
