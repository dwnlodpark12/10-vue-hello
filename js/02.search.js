var products = [
	{id: 1, name: 'Funiture 01', src: '../img/lx-0-0.jpg', price:'$599.00'},
	{id: 2, name: 'Funiture 02', src: '../img/lx-1-0.jpg', price:'$399.00'},
	{id: 3, name: 'Funiture 03', src: '../img/lx-2-0.jpg', price:'$599.00'},
	{id: 4, name: 'Funiture 04', src: '../img/lx-3-0.jpg', price:'$599.00'},
	{id: 5, name: 'Funiture 05', src: '../img/lx-4-0.jpg', price:'$899.00'},
	{id: 6, name: 'Funiture 06', src: '../img/lx-5-0.jpg', price:'$599.00'},
	{id: 7, name: 'Funiture 07', src: '../img/lx-6-0.jpg', price:'$699.00'},
	{id: 8, name: 'Funiture 08', src: '../img/lx-7-0.jpg', price:'$299.00'},
	{id: 9, name: 'Funiture 09', src: '../img/lx-8-0.jpg', price:'$199.00'},
	{id: 10, name: 'Funiture 10', src: '../img/lx-9-0.jpg', price:'$299.00'},
	{id: 11, name: 'Funiture 11', src: '../img/lx-10-0.jpg', price:'$599.00'},
	{id: 12, name: 'Funiture 12', src: '../img/lx-11-0.jpg', price:'$399.00'}
];

new Vue({
	el: '#app',
	data: {
		title: '배고파 식당',
		subTitle: '메뉴를 선택하세요.',
		search: '',
		prds: []
	},
	methods: {
		onReset() {
			this.search = '';
		}
	}
});