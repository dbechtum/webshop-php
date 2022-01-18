window.Event = new Vue();

new Vue({
    el: '#app',
    data: {
        appName: "Poster Space",
        allPosters:'',
    },
    methods:{
        fetchAllData:function(){
            axios.post('/core/action.php', { 
                action:'fetchall'
            }).then(function(response){
                this.allPosters = response.data;
                Event.$emit('postersLoaded', this.allPosters);
            });
        }
    },
    mounted() {
        axios.post('/core/action.php', { 
            action:'fetchall'
        }).then(function(response){
            this.allPosters = response.data;
            Event.$emit('postersLoaded', this.allPosters);
        });
    }
})
Vue.config.devtools = true
Vue.config.productionTip = false