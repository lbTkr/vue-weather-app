<script setup>
    import Navbar from './components/Navbar.vue';
    import MainComp from './components/MainComp.vue';
    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';


    const store = useStore();

    // 앱이 실행되면 날씨 데이터 가져오는 로직 작성
    onMounted(() => {
        store.dispatch('getWeather');
    });

    const onSearchCity = (city) => {
        store.commit('onSearchCity', city);
        store.dispatch('getWeather');
    };
</script>

<template>
    <button @click="store.dispatch('getWeather')">Get Weather</button>
    <Navbar />
    <MainComp />
</template>

<style lang="scss" scoped>

</style>