<template>
  <div
		v-show="$store.state.alram.viewAlram"
		:class="$store.state.alram.aniClass">
		<b-card>
			<b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:200px; overflow-y:scroll;"
      >
				<b-card-text class="alram-title">
					마감일이 지난 항목
				</b-card-text>
				<b-list-group
					drop-placeholder
					class="alram-list"
					v-for="(item, idx) in $store.state.alram.itemList"
					v-bind:key="idx">
					<b-list-group-item button @click="showDetail(item)">
						{{ item.title }} / {{ timeParser(item.dueDate) }}
					</b-list-group-item>
				</b-list-group>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
/*eslint no-unused-vars: "error"*/
//import axios from 'axios';
import CommonMixin from '../../mixin';

export default {
  name: 'AlramList',
  props: {
  },
	mixins: [ CommonMixin ],
	components: {
	},
	data () {
		return {
		}
	},
	mounted () {
	},
	methods: {
		showDetail (item) {
			this.$store.dispatch('update_card', {
				viewType: 'fix',
				...item
			});
		}
	}
}
</script>

<style scoped>
.alram-list {
	height: 50px;
	margin-bottom: 10px;
}
.alram-title {
	font-size: 1.4rem;
}
</style>
