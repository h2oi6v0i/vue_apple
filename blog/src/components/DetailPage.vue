<template>
    <div>
        <h4>상세 페이지 ✨</h4>
        <h5>{{ listData[ $route.params.id ].title }}</h5>
        <p>{{ listData[ $route.params.id ].content }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DetailPage',

    props: {
        listData: Array,
    }
}
</script>

<style>

</style>