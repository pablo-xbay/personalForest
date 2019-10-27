<template>
    <div class="header">
        <button class="btn" @click="showHidden">Couple creatures</button>
    </div>
</template>

<style lang="scss">
.header {
    background: black;
    padding: 10px;
    height: 40px;
    .btn {
        display: block;
        float: right;
        background: #3377ff;
        border: 1px solid #80aaff;
        border-radius: 25px;
        padding: 10px;
    }
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['showHidden']),
  },
};
</script>
