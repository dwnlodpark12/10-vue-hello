new Vue({ 	//DOM 하나 당 vue 하나씩 
	el: "#app",
	data: {	//변수
		title: 'Hell Vue!',
		username: 'akahyr',
		x: '',
		y: '',
		z: ''
	},
	methods: {	//함수, ES6 의 객체에 함수 등록
		onSum() {
			this.z = Number(this.x) + Number(this.y);
		},
		onReset() {
			this.x = this.y = this.z = '';
		}
	}
});