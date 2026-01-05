<template>
    <div class="container">
        <SearchBar />
        <WeatherInfo :weatherData="weatherData"/>
    </div>
</template>

<script setup>
    import SearchBar from './SearchBar.vue';
    import WeatherInfo from './WeatherInfo.vue';

    // 날시 데이터 상태변수
    const props = defineProps({
        weatherData: Object,
    });
</script>

<style lang="scss" scoped>

</style>