<template>
<div>
    <img :src="oneroom.image" class="room-img">
    <h4 @click="openModal">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }}원</p>
</div>
</template>

<script>
export default {
    name: "ProductCard",
    
    props: {
        oneroom : Object
    },

    methods: {
        openModal() {
            this.$emit( 'openModal', this.oneroom.id );
        },
    }
}
</script>

<style>

</style>