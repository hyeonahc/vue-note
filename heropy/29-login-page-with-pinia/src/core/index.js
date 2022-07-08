export async function validateTokenUser() {
	const accessToken = window.localStorage.getItem('token')

	const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'apikey': 'FcKdtJs202204',
			'username': 'HyeonahCho',
			'Authorization': `Bearer ${accessToken}`
		},
	})

	return await res.json()
	// 사용자 정보가 담겨져있는 객체 or 유효한 사용자 정보가 아닙니다라는 에러메세지가 리턴된다
}
