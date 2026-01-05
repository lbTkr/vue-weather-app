<template>
    <div class="container">
        <SearchBar
            @onSearchCity="onSearchCity"/>
        <WeatherInfo :weatherData="weatherData"/>
    </div>
</template>

<script setup>
    import SearchBar from './SearchBar.vue';
    import WeatherInfo from './WeatherInfo.vue';
    
    const emits = defineEmits(['onSearchCity']);

    // 날시 데이터 상태변수
    const props = defineProps({
        weatherData: Object,
    });
    const onSearchCity = (city) => {
        console.log('MainComp.vue', city);
        emits('onSearchCity', city);
        // 여기에 도시 이름을 받아서 처리하는 로직 작성
    };
</script>

<style lang="scss" scoped>

</style>