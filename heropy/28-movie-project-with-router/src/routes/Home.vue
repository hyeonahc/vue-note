<template>
  <h1>Search</h1>
  <input
    v-model="searchText"
    @keydown.enter="searchMovies" />
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <RouterLink :to="`/movies/${movie.imdbID}`">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
	data() {
		return {
			searchText: '',
			movies: []
		}
	},
	methods: {
		async searchMovies() {
			// https 리퀘스트
			// www 서브도메인
			// omdbapi.com 도메인
			// ?이후에는 모두 필터역할을하는 쿼리 스트링
			let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${this.searchText}`)
			res = await res.json()
			console.log(res)
			this.movies = res.Search
		}
	}
}
</script>

