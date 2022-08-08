<template>
  <div class="container">
    <div class="inner">
      {{ message }}
      <div class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
	components: {
		MovieItem
	},
	computed: {
		movies() {
			// $ 키워드로 store에 접근, state 값 불러오기, movie 모듈 안에 있는 movies state 값을 리턴
			return this.$store.state.movie.movies
		},
		message() {
			return this.$store.state.movie.message
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	.movies {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>