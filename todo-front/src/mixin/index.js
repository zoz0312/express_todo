export default {
  created: function () {
  },
  methods: {
		_alert (comments, timer, style) {
			comments = comments === undefined ? '' : comments;
			timer = timer === undefined ? 5 : timer;
			this.$store.dispatch('popup_alert', {
				timer,
				comments,
				style
			});
		}
  }
}

