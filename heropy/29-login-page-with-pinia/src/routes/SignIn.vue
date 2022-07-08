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
  <button @click="signIn">
    로그인
  </button>
</template>

<script>
// Pinia store 등록하기
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'

export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},
	computed: {
		// userStore라는 객체에 접근할 수 있게 된다
		// userStore.user는 user.js 스토어에서 만든 state값이다
		...mapStores(useUserStore)
	},
	methods: {
		async signIn() {
			const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'apikey': 'FcKdtJs202204',
					'username': 'HyeonahCho'
				},
				body: JSON.stringify({
					email: this.email,
					password: this.password,
				})
			})
			// 로그인 후 받아온 데이터에서 accessToekn만 객체 데이터에서 빼오기
			// 사용자 정보 user는 localStorage에 저장하지 않는다
			// user 정보가 필요한 순간에는 localStorage에 저장된 accessToken을 사용한다
			// user 정보는 유효기간이 없으므로 localStorage에 데이터를 저장하는 것은 보안성이 좋지 않다
			// user 정보는 sessionStorage 또는 뷰 저장소(vuex, Pinia)에 저장해준다
			// 사용자가 로그인을 한 후 서버에서 user 정보를 가지고 온 후에 store에 있는 user 객체를 업데이트 해준다
			const { user, accessToken } = await res.json()
			window.localStorage.setItem('token', accessToken)
			this.userStore.user = user
			console.log(user)
		}
	}
}
</script>
