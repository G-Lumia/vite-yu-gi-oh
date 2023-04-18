<template>
    
    <section class="d-flex justify-content-center">
        <select name="archetypes" id="archetypes" v-model="archetypes.archetypeSearch" @select="$emit('change')">
            <option value="none"> </option>
            <option v-for="(archetype , index) in archetypes.archetypesList" :value="archetype.archetype_name" :key="index">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </section>
</template>
<script>
import {archetypes} from '../data/archetypes'
import axios from 'axios';
export default {
    name: 'Search',
    data() {
        return {
            archetypes
        }
    },
    methods: {
        getArchetypes() {
        const url = archetypes.baseUrl + archetypes.endpoint;
        axios.get(url).then((res) => {
            archetypes.archetypesList = res.data;
            console.log(archetypes.archetypesList);
            });
        }
        },
        mounted() {
        this.getArchetypes();
  }
    
}
</script>
<style lang="">
    
</style>