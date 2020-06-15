export default {
	created: function () {
	},
	methods: {
		_alert (comments, style, timer) {
			comments = comments === undefined ? '' : comments;
			timer = timer === undefined ? 5 : timer;
			this.$store.dispatch('popup_alert', {
				timer,
				comments,
				style
			});
		},
		timeParser (itemDate) {
			if (!!itemDate === false || itemDate === '') {
				return 'X';
			}
			const obj = new Date(itemDate.split('.')[0]);
			return `${obj.getFullYear()}년 ${obj.getMonth() + 1}월 ${obj.getDate()}일`;
		},
	}
}

