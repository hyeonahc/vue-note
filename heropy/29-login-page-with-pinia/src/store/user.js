import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state() {
		return {
			// 사용자가 로그인을 할때 아래의 객체에 저장된다
			// 사용자가 로그인을해서 user라는 정보가 서버에서 도착했을때 user 객체가 채워진다
			user: {}
		}
	}
})
