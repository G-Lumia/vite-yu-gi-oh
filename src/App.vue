<template>
    <HeaderComponent title="Yu-Gi Oh" />
    <main>
        <YuGiList/>
    </main>
</template>
  
<script>
    import { store } from './data/store';
    import axios from 'axios';
    import HeaderComponent from './components/HeaderComponent.vue';
    import YuGiList from './components/YuGiList.vue';
    export default {
    name: 'App',
    components: {
        HeaderComponent,
        YuGiList
    },
    data() {
        return {
        store
        }
    },
    methods: {
        getCards() {
        const url = store.baseUrl + store.endpoint;
        axios.get(url).then((res) => {
            store.cardList = res.data.data;
            console.log(res.data.data)
            });
        }
        },
    mounted() {
        store.endpoint = 'card';
        this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>