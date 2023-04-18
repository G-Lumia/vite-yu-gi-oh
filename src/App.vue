<template>
    <HeaderComponent title="Yu-Gi Oh" />
    <Search @change="changeList"/>
    <main>
        <YuGiList/>
    </main>
</template>
  
<script>
    import { store } from './data/store';
    import { archetypes } from './data/archetypes';
    import axios from 'axios';
    import HeaderComponent from './components/HeaderComponent.vue';
    import YuGiList from './components/YuGiList.vue';
    import Search from './components/Search.vue';
    export default {
    name: 'App',
    components: {
        HeaderComponent,
        YuGiList,
        Search
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
            store.cardList = res.data;
            console.log(res.data.data)
            });
        },
        changeList(){
            const url = archetypes.changeUrl + archetypes.archetypeSearch;
            axios.get(url).then((res) => {
                store.cardList = res.data;
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