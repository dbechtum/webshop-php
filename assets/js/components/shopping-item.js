Vue.component('shopping-item', {
    template: `
    <div>
        <div class="removeCartItemButton" @click="removeItem(index)" style="cursor: pointer;">
            <p>&#10005;</p>
        </div>
        <img v-if="orientation=='Landscape'" class="cartContentImg" :src="image_path_landscape + id + image_extension">
        <img v-else class="cartContentImg" :src="image_path_portrait + id + image_extension">
        <p>Title: {{ title }}</p>
        <p>Orientation: {{ orientation }}</p>
        <p>Size: {{ size }}</p>
        <div class="CartItemButton" @click="updateCartItem(-1)"
        style="cursor: pointer;">
            <p>&#45;
            </p>
        </div>
        <p>Amount: {{ amount }}</p>
        <div class="CartItemButton" @click="updateCartItem(1)"
        style="cursor: pointer;">
            <p>&#43;</p>
        </div>
        <p v-show="discount!=1">Discount: {{ discount_display }}</p>
        <p v-show="discount!=1">Original Price: &#36;{{ (price).toFixed(2) }}</p>
        <p>Price: &#36;{{ (price * discount).toFixed(2) }}</p>
        <p v-show="discount!=1">Price reduction: {{ "You saved $" + Math.round(price * amount * (1 - discount)).toFixed(2)}}
        <p>Subtotal: &#36;{{(price * amount * discount).toFixed(2)}}</p>
    </div>
    `,
    props: ['index','title','id','stock','orientation','size','amount'],
    data() {
        return {
            image_path_landscape: "/assets/images/posters/landscape/",
            image_path_portrait: "/assets/images/posters/portrait/",
            image_extension: ".jpg",
        }
    },
    computed: {
        discount() {
            if (this.stock >= 200){
                return 0.6;
            } else if (this.stock >= 100){
                return 0.8;
            } else {
                return 1;
            }
        },
        discount_display() {
            if (this.stock >= 200){
                return "40%";
            } else if (this.stock >= 100){
                return "20%";
            } else {
                return "";
            }
        },
        price() {
            switch (this.size) {
                case "Large":
                    return 15;
                case "Medium":
                    return 10;
                case "Small":
                    return 5;
            }
        },
    },
    methods: {
        updateCartItem: function(amount) {
            Event.$emit('updateCartItem', this.index, amount);
        },
        removeItem: function() {
            Event.$emit('removeItem', this.index);
        }
    }
});