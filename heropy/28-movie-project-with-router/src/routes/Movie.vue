<template>
  <h1>{{ movie.Title }}</h1>
  <div
    :style="{ backgroundImage: `url(${requestDiffSizPoster(movie.Poster)})` }"
    class="poster"></div>
</template>

<script>
export default {
	data() {
		return {
			// 영화 하나의 상세정보를 가지는 객체 데이터
			movie: {}
		}
	},
	// 컴포넌트가 연결된 직후에 바로 실행
	created() {
		this.searchMovieDetail()
	},
	methods: {
		async searchMovieDetail() {
			console.log(this.$route)
			let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${this.$route.params.movieId}`)
			res = await res.json()
			// console.log(res)
			this.movie = res
		},
		// 데이터 movie는 searchMovieDetail 함수가 실행되기 전까지는 빈 객체이므로 src 값이 없는 undefined 상태다
		// undefined.replace는 불가하므로 에러코드가 발생한다
		// 이를 해결하기 위해 src의 기본값으로 빈 문자열을 넣어준다
		// 또는 src가 undefined일때 함수를 종료시켜준다
		requestDiffSizPoster(src = '') {
			// if(!src) return
			return src.replace('SX300', 'SX700')
		}
	}
}
</script>

<style lang="scss" scoped>
.poster {
	width: 400px;
	height: calc(400px * 3 / 2);
	background-size: cover;
	background-color: lightgray;
}
</style>
