<template>
    <div class="weather-info">
        <div class="icon">
            <img :src="`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`" :alt="`props.weatherData.icon == ${props.weatherData.text}`" />
        </div>
        <div class="temp">
            {{ ((props.weatherData.temp - 273.15)).toFixed(0) }}&deg;

        </div>
        <div class="text">{{ props.weatherData.text }}</div>
        <div class="location">
            {{ props.weatherData.city }}, {{ props.weatherData.location }}</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        weatherData: Object,
    });
    
</script>

<style lang="scss" scoped>
    .weather-info {
        padding: 20px;
        & > div {
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #ccc;
        }
        .icon img {
            width: 140px;
        }
        .temp {
            font-size: 4em;
        }
        .text {
            font-size: 2em;
        }
    }
</style>