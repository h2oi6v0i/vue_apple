<template>
    <div>
        <div v-for="(item, index) in listData" :key="index">
             <h5 @click="$router.push(`/detail/${index}`)">{{ item.title }}</h5>
            <p>{{ item.date }}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'BlogList',

    props: {
        listData: Array,
    }
}
</script>

<style>

</style>