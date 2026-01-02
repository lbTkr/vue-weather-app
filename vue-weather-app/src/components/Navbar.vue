<template>
    <nav class="navbar">
        <button class="toggle">
            <font-awesome-icon class="icon" icon="fa-solid fa-bars-staggered"/>
        </button>
        
    </nav>
</template>

<script setup>
    // export default Navbar;
</script>

<style lang="scss" scoped>
    .navbar {
        background:#fff;
        width:100%;
        padding:20px;
        display:flex;
        justify-content:end;

        button{
            border:none;
            background:transparent;
            cursor:pointer;
            .icon{
                color:#333;
                font-size:24px;
            }
        }
    }
</style>