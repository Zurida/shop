<template>
    <div class="articles">
        <Item v-for="item in data.items" :item="item" :key="item.id"/>
    </div>
</template>

<script>
    import Item from '@/components/section/blog/articles/item'

    export default {
        name: "Articles",
        components: {
            Item
        },
        props: {
            data: Object
        }
    }

</script>

<style scoped lang="stylus">
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
</style>