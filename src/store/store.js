// Vuex에서 전역 데이터를 관리하는 파일
import { createStore } from "vuex";

// store 만들기
export default createStore({
    state: {
        // initial state
        count: 0,

        //날씨 데이터 상태변수
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        },
        toggle: false, // false일 때, about을 보여줌
    },
    mutations: {
        // mutations: state 변경 메서드
        // 데이터를 변경할 일이 생기면 commit() 으로 mutations 함수를 호출하여 상태변경

        addCount(state, payload){ // state 파라미터는 현재 state 객체를 가리킴
            state.count += 1 + payload;
        },
        updateWeather(state, payload){
            state.weatherData = payload;
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = Math.round(payload.main.temp - 273.15);
            state.weatherData.text = payload.weather[0].main;
            state.weatherData.location = `${payload.name}, ${payload.sys.country}`;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload){
            state.weatherData.city = payload;
        },
        // about 컴포넌트 토글
        toggleButton(state){
            state.toggle = !state.toggle;
        }
    },
    actions: {
        // 비동기 작업을 처리할 때 사용
        // 날씨 데이터 가져오기
        getWeather(context){ // context: store 객체와 비슷한 전역 객체
            /*
             * ${weatherData.value.city} -> ${context.state.weatherData.city}
             * context 객체를 통해 state에 접근하면
             * weatherData.value 대신 context.state.weatherData로 접근 가능
             */
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;

            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    // mutation 함수로 날씨 정보 업데이트
                    context.commit('updateWeather', data);
                })
                .catch(err => {
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
                })
        }
    }
});