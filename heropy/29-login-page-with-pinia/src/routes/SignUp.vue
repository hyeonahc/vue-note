<!-- 회원가입 컴포넌트 -->
<!-- 
	회원가입 필수 요소 3가지
	1. email
	2. password 8자리 이상
	3. displayName 20자리 이하
	회원가입 후 accessToken이 발급된다
	accessToken은 사용자의 로그인을 유지시켜주는 코드로 회원가입, 로그인 후 24시간동안 유효하다 (24시간 이후에는 다시 로그인을 해야한다)
-->
<template>
  <div>
    <input
      v-model="email"
      type="text" />
  </div>
  <div>
    <input
      v-model="password"
      type="password" />
  </div>
  <div>
    <input
      v-model="displayName"
      type="text" />
  </div>
  <button @click="signUp">
    회원가입
  </button>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'

export default {
	data() {
		return {
			email: '',
			password: '',
			displayName: ''
		}
	},
	computed: {
		...mapStores(useUserStore)
	},
	methods: {
		async signUp() {
			const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'apikey': 'FcKdtJs202204',
					'username': 'HyeonahCho'
				},
				// 회원가입 메서드 SignUp()이 실행되면 fetch로 받아온 API에 body의 내용으로 user 데이터를 생성
				body: JSON.stringify({
					email: this.email,
					password: this.password,
					displayName: this.displayName
				})
			})
			// const user = await res.json()
			// 회원가입 후 받아온 데이터에서 accessToekn만 객체 데이터에서 빼오기
			const { user, accessToken } = await res.json()
			// localStorage에 accessToken 정보 저장하기
			window.localStorage.setItem('token', accessToken)
			this.userStore.user = user
		}
	}
}
</script>
