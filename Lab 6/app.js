const app = new Vue({
    el: '#app',
    data: {
        showDogList: false,
        showCatList: false,
        dogs: [
            { id: 1, name: 'Max', age: 3, comment: 'Gets along well with dogs and children', image: 'images/dog1.jpg' },
            { id: 2, name: 'Bella', age: 2, comment: 'Prefers to be the only pet',image: 'images/dog2.jpg' },
            { id: 3, name: 'Charlie', age: 4, comment: 'Loves everyone!',image: 'images/dog3.jpg' },
            { id: 4, name: 'Lucy', age: 5, comment: 'Great with cats and children',image: 'images/dog4.jpg' },
            { id: 5, name: 'Cooper', age: 1, comment: 'Needs a home with a yard',image: 'images/dog5.jpg' }
        ],
        cats: [
            { id: 1, name: 'Simba', age: 2, comment: 'Timid around dogs but loves children',image: 'images/cat.jpg' },
            { id: 2, name: 'Luna', age: 4, comment: 'Enjoys the company of other cats',image: 'images/cat2.jpg' },
            { id: 3, name: 'Oreo', age: 3, comment: 'Best as the only pet in the home',image: 'images/cat3.jpg' },
            { id: 4, name: 'Milo', age: 6, comment: 'Laid-back and affectionate',image: 'images/cat4.jpg' },
            { id: 5, name: 'Smokey', age: 2, comment: 'Playful and good with children',image: 'images/cat5.jpg' }
        ]
    },
    methods: {
        toggleDogList() {
            this.showDogList = !this.showDogList;
        },
        toggleCatList() {
            this.showCatList = !this.showCatList;
        }
    }
});