<script setup>
    import Navbar from './components/Navbar.vue';
    import data from './assets/portfolio';
</script>

<template>
    <Navbar />

    <!--
        data는 router로 묶여있는 router-view에서
        data를 전송할 수 있어야 함
    -->
    <router-view :data="data" />
</template>

<style scoped lang="scss">
    .parent{
        h1{
            color:red;
        }
        button{
            color:yellow;
        }
    }
</style>
