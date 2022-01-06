Vue.component('product', {
    props: ['poster'],
    template: `
    <div v-show="isVisible" class="posterContainer p-3 m-0" :category="poster.category">
        <div class="posterInnerContainer p-0 m-0" @click=showProduct(poster)>
            <div class="posterImg rounded shadow">
                <img :src="image" alt="" class="posterImg img-fluid rounded">
            </div>
            <div class="overlayBackground rounded-bottom">
                <div class="overlayText">
                    <p class="browseItemName">{{poster.title}}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            selectedCategory: this.getSelectedCategory()
        }
    },
    computed: {
        image(){
            return '/assets/images/posters/portrait/' + this.poster.id + '.jpg';
        },
        isVisible(){
            return (this.poster.category === this.selectedCategory);
        }
    },
    methods: {
        getSelectedCategory: function(){
            return localStorage.getItem("selectedCategory");
        },
        setSelectedCategory: function(category){
            this.selectedCategory = category;
        },
        showProduct: function(poster){
            Event.$emit('showProduct', poster);
        }
        
    },
    created() {
        Event.$on('categoryUpdated', function(category) {
            this.setSelectedCategory(category);
        }.bind(this));
    }
})