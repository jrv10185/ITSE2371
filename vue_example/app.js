const app = Vue.createApp({
    data(){
        return{
            showTrees: 'true',
            trees:[
                {cname:'white Oak', lname:'Quircus', number:5},
                {cname:'Sycamore', lname:'Moo', number:3},
                {cname:'Wooden', lname:'woodus', number:10},
            ]
        }
    },
    methods:{
        changeCname(){
            this.cname = "White Oak"
        },
        toggleTrees(){
            this.showTrees = !this.showTrees
        }
    }
})
app.mount('#app')