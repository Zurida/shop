<template>
    <div class="order">
        <!--        <div class="title">У вас пока нет заказов</div>-->
        <div class="title">У вас {{orderLengthText}}</div>
        <OrderItem v-if="orders.length > 0" v-for="order in orders" :key="order.id" :item="order"/>
        <div v-else>У Вас нет еще заказов</div>
        <!--        <Btn outline large primary >Показать еще</Btn>-->
    </div>
</template>

<script>
    import OrderItem from '@/components/section/account/order/order-item'
    import {mapState} from 'vuex';

    export default {
        name: "Order",
        components: {
            OrderItem
        },
        computed: {
            ...mapState({
                orders: state => state.product.orders
            }),
            orderLengthText() {
                const {length} = this.orders;
                let text = "нет заказов"
                if(length === 1)text = 'заказ';
                if(length >= 2)text = 'заказов';
                return `${length} ${text}`
            }
        },
        mounted() {
            this.$store.dispatch('product/loadOrders')
        }
    }
</script>

<style lang="stylus" scoped>
    .order {
        .title {
            font-size: 18px;
            line-height: 22px;
            font-family $font-bold
            margin-bottom 20px
        }

        .btn {
            text-transform: uppercase
            padding 21.5px 61px
            margin-top 30px
        }
    }


</style>