<template>
    <div class="search-bar">
        <form @submit.prevent>
            <div class="form-group">
                <input
                    @input="inputText = $event.target.value;"
                    type="search"
                    placeholder="지역을 입력해 주세요">
                <button
                    @click="
                        $store.commit('onSearchCity', inputText);
                        $store.dispatch('getWeather');
                    "
                >
                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </form>
    </div>
    <p>{{ inputText }}</p>
</template>

<script setup>
    import { ref } from 'vue';

    const inputText = ref('');
    const emits = defineEmits(['onSearchCity']); // 이벤트를 정의하고 함수를 반환
</script>

<style lang="scss" scoped>
    .search-bar {
        border-radius: 40px;
        background: #fff;
        border: 1px solid #ccc;
        margin:20px 20px 0;
        padding: 0 20px;
    
        form {
            .form-group {
                display: flex;
                input {
                    width: 100%;
                    border: none;
                    padding: 1em 0;
                    font-size: 18px;
                    outline: none;
                    font-size: 14px;
                }
                button {
                    background: transparent;
                    border: none;
                    &:hover { cursor: pointer; }
                    .icon { font-size: 24px; }
                }
            }
        }
    }
</style>