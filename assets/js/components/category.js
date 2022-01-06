Vue.component('category', {
    props: ["category"],
    template: `
    <div>
        <li class="nav-item">
            <a :id="category" class="nav-link category pt-0 pb-1" :class="{ active: isActive }" :category="category" @click="setCategory(category)">{{ category }}</a>
        </li>
    </div>
    `,
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        setCategory: function(category){
            localStorage.setItem('selectedCategory', category);
            Event.$emit('categoryUpdated', category);
        },
    },
    created() {
        Event.$on('categoryUpdated', function(category) {
            this.isActive = (category === this.category);         
        }.bind(this));
    },
    mounted() {
        let category = localStorage.getItem('selectedCategory');
        this.isActive = (category === this.category); 
    }
})