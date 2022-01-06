Vue.component('shopping-cart', {
    template: `
    <div>
        <div class="cart shadow">
            <div class="cartCloseButton" @click="hideCart()" style="cursor: pointer;">
                <p>&#10005;</p>
            </div>
            <li v-for="(content, index) in cartContent">
                <div v-if="content.title!='Subscription'" is="shopping-item"
                    v-bind:key="index" v-bind:index="index"
                    v-bind:title="content.title"
                    v-bind:id="content.id"
                    v-bind:orientation="content.orientation"
                    v-bind:size="content.size"
                    v-bind:amount="content.amount">
                </div>
                <div v-else>
                    <p>put subscriptions component here</p>
                </div>
            </li>
            <p>{{"Total: $" + cart_total_price.toFixed(2)}}</p>
            <p v-show="cart_total_discount>0">{{"You saved $" + cart_total_discount.toFixed(2)}}
            </p>
        </div>
        <div class="cartBackground" @click="hideCart()"></div>
    </div>
    `,
    data(){
        return {
            cartContent: [],
            posterList: posters,
        }
    },
    computed: {
        cart_total_price(){
            let total = 0;

            this.cartContent.forEach(el => {
                // if(el.title==="Subscription"){
                //     let subtotal = 0;
                //     subtotal = (el.amounts[0] * 15) + (el.amounts[1] * 10) + (el.amounts[2] * 5);
                //     discountAmount = 1 - ((el.amounts[0] + el.amounts[1] + el.amounts[2]) * 0.025);
                //     if(discountAmount < 0.7){
                //         discountAmount = 0.7;
                //     }
                //     subtotal *= discountAmount;
                //     total += subtotal;
                // } else {
                    if(this.posterList[el.id].stock >= 200){
                        total += ((el.size != 'Small' ? el.size == 'Large' ? 15 : 10 : 5) * el.amount * 0.6);
                    } else if (this.posterList[el.id].stock>= 100){
                        total += ((el.size != 'Small' ? el.size == 'Large' ? 15 : 10 : 5) * el.amount * 0.8);
                    } else {
                        total += ((el.size != 'Small' ? el.size == 'Large' ? 15 : 10 : 5) * el.amount);
                    }
                // }
            });
            return total;
        },
        cart_total_discount(){
            let total = 0;

            this.cartContent.forEach(el => {
                if(el.title!=="Subscription"){
                    if(this.posterList[el.id].stock >= 200){
                        total += ((el.size != 'Small' ? el.size == 'Large' ? 15 : 10 : 5) * el.amount * 0.4);
                    } else if (this.posterList[el.id].stock>= 100){
                        total += ((el.size != 'Small' ? el.size == 'Large' ? 15 : 10 : 5) * el.amount * 0.2);
                    }        
                }    
            });
            return total;
        }
    },
    methods: {
        showCart: function() {
            $('.cart').fadeIn();
            $('.cartBackground').fadeIn();
        },
        hideCart: function() {
            $('.cart').fadeOut();
            $('.cartBackground').fadeOut();
        },
        addToCart: function(poster, orientation, size) {
            let index = this.cartContent.findIndex(
                x => x.title === poster.title &&
                x.id === poster.id &&
                x.orientation === orientation &&
                x.size === size);
            if(index === -1){
                this.cartContent.push({
                    title: poster.title,
                    id: poster.id,
                    orientation: orientation,
                    size: size,
                    amount: 1
                })
            } else {
                this.cartContent[index].amount++;
            }
            //this.updateCartHeader();
        },
        removeItem: function(index){
            this.cartContent.splice(index,1);
            //this.updateCartHeader();
        },
        updateCartItem: function(index, amount) {
            this.cartContent[index].amount += amount;
            if(this.cartContent[index].amount === 0){
                this.removeItem(index);
            }
            //this.updateCartHeader();
        }
    },
    created() {
        Event.$on('showCart', function() {
            this.showCart();
        }.bind(this));
        Event.$on('addToCart', function(poster, orientation, size) {
            this.addToCart(poster, orientation, size);
        }.bind(this));
        Event.$on('updateCartItem', function(index, amount) {
            this.updateCartItem(index, amount);
        }.bind(this));
        Event.$on('removeItem', function(index) {
            this.removeItem(index);
        }.bind(this));
    }
})