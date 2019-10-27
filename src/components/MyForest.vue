<template lang="pug">
.wrap
    Header
    .space
    .all-items
        .item(v-for="item in items" v-if="item.visible")
            img.animated.fadeIn(:src="item.imgSrc")
</template>

<script>
/* eslint-disable */
import Header from './Header.vue';
import Item from './Item.vue';
import { mapState } from 'vuex';


export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['items']),
    },
    components: {
        Header,
        Item,
    },
};
</script>

<style lang="scss">
.wrap {
    height: 100%;
    width: 100%;
}
    .space {
        height: 50vh;
        width: 100%;
    }
    .all-items {
        height: 30vh;
        margin-left: 200px;
    }
.item {
    display: inline;
}
</style>