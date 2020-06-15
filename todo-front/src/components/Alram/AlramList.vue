<template>
  <div>
		<b-card>
			<b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:200px; overflow-y:scroll;"
      >
				<b-list-group
					drop-placeholder
					class="alram-list"
					v-for="(item, idx) in $store.state.alram.itemList"
					v-bind:key="idx">
					<b-list-group-item>
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
	}
}
</script>

<style scoped>
.alram-list {
	height: 50px;
	margin-bottom: 10px;
}
</style>
