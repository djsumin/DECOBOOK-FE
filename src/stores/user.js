import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const REST_USER_API = `http://localhost:8080/api/user`

export const useUserStore = defineStore('user', () => {

    // =========== STATE ===============
    const user_id = ref('');

    // =========== GETTER ===============
    
    // =========== ACTION ===============
    function login(id, pw) {
        axios.post(
            `${REST_USER_API}/login`, 
            null, 
            { 
                params: { 
                    user_id: id, 
                    password: pw, 
                } 
            })
            .then((response)=>{
                
                if(response.data["access-token"].length > 0) {
                    // ★ 여기에서 로그인 처리하자
                    // 1. JWT 토큰 받아온 것을 세션에 저장
                    // 2. JWT 토큰 디코딩하여 ID 갖고와서 저장
                } else{
                    window.alert("로그인 실패 !!")
                }
            })
            .catch((error)=>{
                alert("로그인 오류!!");
                console.log(error);
            })
    }

    // be에 logout 구현 X => 나중에 고
    function logout() {
        axios.get(`${REST_USER_API}/logout`)
        .then(()=>{
            window.alert("로그아웃!");
            user_id.value = "";
            sessionStorage.clear();
        })
    }
    return {
        user_id,
        login,
    }
})
