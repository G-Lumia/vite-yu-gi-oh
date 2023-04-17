<template>
    <header class=" container bg-primary d-flex justify-content-center py-5 my-4">
        <h1 class="text-light"> {{ title }} </h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
</style>