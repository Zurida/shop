<template>
    <div class="order-item">
        <div class="order-item__head" :class="{'order-item--open': isShow}">
            <div class="order-item__status" :class="{'has-padding': status === 'unPaid'}">
                <div class="status-name">
                    Статус заказа: <span class="status-name__text" :class="status"></span> {{item.status}}
                </div>
                <ui-btn primary v-if="status === 'unPaid'">Оплатить заказ</ui-btn>
                <div class="status-date">
                    Оформлен: <span class="status-date__number">{{date}}</span>
                </div>
            </div>
            <div class="order-item__details" @click=onUnitShow>
                <IconCaret/>
                <div class="order-item__num">
                    Заказ №: <span class="order-num">{{item.id}}</span>
                </div>
                <div class="order-item__total">
                    Общая сумма заказа <span class="order-price">{{item.amount}} руб.</span> <span
                        class="order-quant">({{item.items.length}} позиции)</span>
                </div>
            </div>

        </div>
        <div class="order-item__body" v-if="isShow">
            <div v-for="product in item.items" class="order-unit">
                <a class="order-unit__text">{{product.product.name}} {{product.product.price}} руб ({{product.count}}
                    шт.)</a>
                <nuxt-link
                        :to="'/products/'+product.product.slug">
                    <span class="order-unit__ref ref">Смотреть в каталоге</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import IconCaret from '@/assets/icons/ui/caret'

    export default {
        components: {
            IconCaret,
        },
        props: {
            status: Boolean,
            item: Object
        },
        methods: {
            onUnitShow() {
                this.isShow = !this.isShow;
            }
        },
        computed: {
            date() {
                let date = new Date(this.item.created_at * 1000);
                const check = numb => numb <= 9 ? `0${numb}` : numb;
                const day = check(date.getDate());
                const month = check(date.getMonth());
                const year = date.getFullYear();
                const hours = check(date.getHours());
                const minutes = check(date.getMinutes());
                return `${day}-${month}-${year} в ${hours}-${minutes}`;
            },
            orderStatus: function (status) {
                switch (status) {
                    case 'paid':
                        return 'orderStatus--paid';
                        break;
                    case 'unPaid':
                        return 'orderStatus--unpaid';
                        break;
                    case 'delivered':
                        return 'orderStatus--delivered';
                        break;
                    case 'inProcess':
                        return 'orderStatus--inprocess';
                        break;
                    case 'canceled':
                        return 'orderStatus--canceled';
                        break;
                    default:
                        return 'orderStatus'
                }
            }
        },
        data() {
            return {
                isShow: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .order-item {
        border 1px solid #E5E5E5
        border-radius: 3px
        width 100%
        padding 24px 22px 22px 26px
        margin-bottom 20px

        .icon-caret {
            transition transform 0.4s
        }

        &--open {
            .icon-caret {
                transform rotate(-180deg)
            }
        }

        &__status {
            display flex
            justify-content space-between
            align-items center
            font-size 14px
            line-height 160%
            letter-spacing -0.02em
            color #828282
        }

        .status-name__text {
            &--delivered {
                color #27AE60
            }
        }

        .orderStatus {
            &--delivered {
                color #27AE60
            }

            &--canceled {
                color #828282
            }

            &--unpaid {
                color #EB5757
            }

            &--inprocess {
                color #2D9CDB
            }

            &--paid {
                color #56CCF2
            }
        }

        &__details {
            display flex
            align-items center
            margin-top 13px
            font-family $font-bold
            font-size 16px
            cursor pointer

            .icon {
                width 16px
            }
        }

        &__total {
            margin-left auto
        }

        &__num {
            margin 0 26px 0 28px
        }

        &__body {
            padding-top 22px
        }

        .order-unit {
            display flex
            justify-content space-between
            align-items baseline
            font-size 14px
            line-height 44px
            margin-bottom 10

            &__ref {
                display: block
            }
        }
    }

    +mob() {
        .order-item {
            position: relative;
            margin-bottom 32px

            &__status {
                flex-direction column
                align-items flex-start

                position relative
                font-size 16px
                line-height 29px
            }

            .has-padding {
                padding-bottom 80px
            }

            .btn {
                position absolute
                bottom 20px
                left 50%
                transform translateX(-50%)
                width 100%
                background #fff
                border 2px solid #E91E63
                color #E91E63
                font-size 14px
            }

            &__details {
                flex-direction column
                align-items flex-start
                font-size 16px
                line-height 29px

                .icon {
                    position absolute
                    width 11px
                    height 11px
                    top 25px
                    right 11px
                }
            }

            &__total {
                line-height 22px
            }

            &__num {
                margin-left 0
                margin-bottom 10px
            }

            .order-unit {
                line-height 22px
                flex-direction column
                margin-bottom 30px

                &:last-child {
                    margin-bottom 0
                }
            }
        }
    }
</style>