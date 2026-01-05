<script setup>
    import Navbar from './components/Navbar.vue';
    import MainComp from './components/MainComp.vue';
    import { ref, onMounted } from 'vue';

    //날씨 데이터 상태변수
    const weatherData = ref({
        icon: 'icon',
        temp: 0,
        text: 'text',
        location: 'location',
        city: 'Seoul',
    });


    //앱이 실행되면 날씨 데이터 가져오는 로직 작성
    // onMounted(() => {
    //     getWeather();
    // });
    const onSearchCity = (city) => {
        weatherData.value.city = city;
        // getWeather();
    };
</script>

<template>
    <button @click="$store.dispatch('getWeather')">Get Weather</button>
    <Navbar />
    <MainComp
        :weatherData="weatherData"
        @onSearchCity="onSearchCity"/>
</template>

<style lang="scss" scoped>

</style>