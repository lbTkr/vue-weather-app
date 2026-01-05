// Vuex에서 전역 데이터를 관리하는 파일
import { createStore } from "vuex";

// store 만들기
export default createStore({
    state: {
        // initioal state
        count: 0,

    },
    mutations: {
        // mutations: state 변경 메서드
        // 데이터를 변경할 일이 생기면 commit() 으로 mutations 함수를 호출하여 상태변경
    },
});