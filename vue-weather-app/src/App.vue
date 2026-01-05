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
    onMounted(() => {
        console.log('mounted');
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=ae3f29288113ff51369cab95b18763e1`;

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //상태 변수를 지정하는 지점
                weatherData.value.icon = data.weather[0].icon;
                weatherData.value.temp = data.main.temp;
                weatherData.value.text = data.weather[0].description;
                weatherData.value.location = data.sys.country;
                weatherData.value.city = data.name;
            });
    })
</script>

<template>
    <Navbar />
    <MainComp :weatherData/>
</template>

<style lang="scss" scoped>

</style>