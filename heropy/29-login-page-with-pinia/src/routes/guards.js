import router from './index'
import { useUserStore } from '~/store/user'
import { validateTokenUser } from '~/core'

// 모든 페이지에 접속하기 전에 처리할 로직
router.beforeEach(async to => {
	// to: 어디로 갈건지 메타정보
	// meta.auth가 true일 경우에만(About 컴포넌트에만 설정해놓음) 아래의 로직을 실행한다
	console.log(to)

	const useStore = useUserStore()

	if(to.meta.auth) {
		const user = await validateTokenUser()
		
		if(user.email === 'admin@kdt.com' && user.displayName === 'admin') {
			return '/admin'
		}

		// user 정보가 들어있고 user의 email 데이터가 있다면 정상적인 정보로 처리
		// user 갱신
		if(user && user.email) {
			useStore.user = user
			return true
		}

		// 사용자 정보에 관한 컴포넌트 About에 접근하려다 실패하면 로그인을 다시 해야하기 때문에 signin 페이지로 보낸다
		return '/signin'
	}
	return true
})
