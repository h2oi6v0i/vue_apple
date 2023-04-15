<template>
    <div>
        <div>
            <h5>{{ listData[0].title }}</h5>
            <p>{{ listData[0].date }}</p>
        </div>
         <div>
            <h5>{{ listData[1].title }}</h5>
            <p>{{ listData[1].date }}</p>
        </div>
         <div>
            <h5>{{ listData[2].title }}</h5>
            <p>{{ listData[2].date }}</p>
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