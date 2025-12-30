<script setup>
    import TitleComp from './components/Title.vue';
    import PortfolioComp from './components/Portfolio.vue';
    import AboutComp from './components/About.vue';
</script>

<template>
<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#title">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<TitleComp />
<PortfolioComp />
<AboutComp />

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
