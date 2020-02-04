<template>
    <div class="article">
        <div class="article__item">
            <div class="article__img"
                 :style="{backgroundImage:`${item.image ? `url(${item.image})` : 'none'}`}"
            ></div>
            <div class="article__body">
                <div class="article__date">{{item.date}}</div>
                <div class="article__title">{{item.title}}</div>
                <div class="article__about">
                    <div class="article__text" v-html="item.description"/>
                    <div class="article__more">
                        <nuxt-link :to="`/articles/${item.slug}`" class="ref article__ref">Читать далее</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item: Object
        }
    }
</script>

<style lang="stylus" scoped>

    .article {

        &__item {
            display flex
            align-items flex-start
            flex-wrap wrap
            padding-bottom 29px
            margin-bottom 23px
            border-bottom 1px solid #eeeeee
            max-width 760px
            position relative

            &:last-child {
                border-bottom none
            }
        }

        &__img {
            width 143.3px
            height 136px
            margin-right 39px
            border-radius 5px
            background-color #d4d4d4
            background-size cover
            background-position center center
            background-repeat no-repeat
        }

        &__date {
            font-family $font-regular
            font-size: 12px
            letter-spacing -0.02em
            color: #828282
            line-height 16px
        }

        &__title {
            font-family $font-bold
            font-size: 28px
            line-height 34px
            letter-spacing -0.02em
            color #333333
            margin-top 8px
            padding-bottom 20px
            max-width 560px
        }

        &__text {
            font-family $font-regular
            font-size 14px
            line-height 22px
            letter-spacing -0.02em
            color: $color-default
            display inline-block
            max-width 450px
            vertical-align bottom
        }

        &__ref {
            font-family $font-bold
            vertical-align bottom
            margin-bottom 3px
            text-align right
            position relative
            left 30px
            transition color 0.3s
        }

        ul {
            padding-left 15px
            li {
                list-style-type disc
            }
        }

        ol {
            padding-left 15px
            li {
                list-style-type decimal
            }
        }
    }

    +mob() {

        .article {
            &__item {
                width 300px
                height 176px
                margin 0 auto 23px
            }

            &__img {
                position absolute
                top 0
                left 0
                bottom 0
                right 0
                width 100%
                height 100%
            }

            &__body {
                position absolute
                display flex
                flex-direction column
                align-items flex-start
                width 100%
                height 100%
                padding 12px
                border-radius 5px
                background rgba(0, 0, 0, 0.45)
            }

            &__text {
                display none

            }

            &__title {
                color #ffffff
                font-size 18px
                line-height 110%
                max-width 310px
                margin-top auto
                padding-bottom 0
            }

            &__date {
                display inline-block
                padding 9px 18px 5px
                background-color #fffffff0
                border-radius 3px
                font-size 12px
                line-height 132.24%
            }

            &__ref {
                position: absolute;
                font-size: 0;
                display: block;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                border none
            }
        }
    }


</style>