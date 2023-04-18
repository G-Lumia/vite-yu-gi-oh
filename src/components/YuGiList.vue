<template>
    <section class="d-flex justify-content-center">
        <div class="container row">
            <YuGiCard v-for="(card , index) in store.cardList.data" :key="index" :card="card" />
        </div>
    </section>
</template>

<script>
import { store } from '../data/store';
import YuGiCard from './YuGiCard.vue';
export default {
    name: 'YuGiList',
    components: {
        YuGiCard
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
</style>