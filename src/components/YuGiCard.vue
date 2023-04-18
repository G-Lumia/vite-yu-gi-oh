<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
        <div class="yugiCard text-center p-3">
            <img :src=card.card_images[0].image_url :alt=card.card_images[0].image_url>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuGiCard',
    props: {
        ['card'] : Object,
    }
}
</script>

<style lang="scss" scoped>
.yugiCard img{
    height:40%;
}
</style>