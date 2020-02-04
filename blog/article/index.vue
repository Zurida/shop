<template>
    <div class="article">
        <h1 class="article__title">{{data.title}}</h1>
        <div class="article__date">{{data.date}}</div>
        <div class="article__row">
            <div class="article__img" :style="{backgroundImage: data.image ? `url(${data.image})` : 'none'}"/>
            <div class="article__text" v-html="data.text"/>
        </div>
    </div>


</template>

<script>
    import Helper from '@/assets/js/helper'

    export default {
        props: {
            data: Object
        }
    }
</script>

<style lang="stylus" scoped>
    .article {

        & >>> .db {
            line-height 28px
        }

        & >>> ul {
            padding-left 15px
            li {
                list-style-type disc
            }
        }

        & >>> ol {
            padding-left 15px
            li {
                list-style-type decimal
            }
        }

        &__title {
            margin-bottom 4px
            font-size 28px
            line-height 34px
            letter-spacing -0.02em
            margin-top 14px
        }

        &__date {
            font-size 12px
            line-height 16px
            letter-spacing -0.02em
            color #828282
            margin-bottom 9px
        }

        /* &__row {
             display flex
         }*/

        img {
            height auto
        }

        &__img {
            width 375px
            height 287px
            background-repeat no-repeat
            background-position center center
            background-size cover
            margin-right 32px
            margin-bottom 35px
            border-radius 2px
            top 5px
            background-color #d4d4d4
            float left
        }

        h3 {
            margin-bottom 40px !important
        }

        &__text {
            font-size 16px
            line-height 24px
            color $color-default

            span {
                display inline-block
                font-family $font-bold
                margin-top 15px
            }

            & >>> p {
                margin-bottom 15px
                line-height 24px

                span {
                    font-family $font-regular
                }

            }
        }
    }

    +mob() {
        .article {
            &__img {
                width 300px
                height 176px
                margin 0 auto 27px
                float none;
            }

            &__title {
                margin-bottom 15px
            }

            &__date {
                margin-bottom 25px
                font-family $font-bold
            }

            &__row {
                flex-direction column
            }
        }
    }
</style>