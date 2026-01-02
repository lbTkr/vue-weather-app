<template>
    <div class="search-bar">
        <form>
            <div class="form-group">
                <input type="search" placeholder="지역을 입력해 주세요">
                <button>
                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.search-bar {
    form {
        .form-group {
            button {
                border:none;
                background:transparent;
                .icon {
                    color:#000;
                }
            }
        }
    }
}
</style>