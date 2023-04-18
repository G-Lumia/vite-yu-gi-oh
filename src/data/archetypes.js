import { reactive } from 'vue';

export const archetypes = reactive({
    archetypesList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    changeUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=',
    endpoint: '',
    archetypeSearch: 'none'
})
