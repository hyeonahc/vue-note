// 컴포넌트
const App = {
  data() {
    return {
      title: '',
      movies: [],
      page: 1,
    };
  },
  // Getter 계산된 데이터 (원본 데이터를 계산하는 옵션)
  computed: {
    customMovies() {
      return this.movies.map(movie => {
        return {
          poster: movie.Poster,
          title: movie.Title,
          id: movie.imdbID,
        };
      });
    },
  },
  methods: {
    // 최초 요청 함수
    // isFirst: 최초검색인지 아닌지 판별하는 파라미터
    async searchMovies(isFirst) {
      if (isFirst) {
        this.movies = [];
        this.page = 1;
      }
      let res = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&s=${this.title}&page=${this.page}`
      );
      res = await res.json();
      console.log(res);
      const { Search, totalResults } = res;
      this.movies.push(...Search);
      this.page += 1;
    },
  },
};

Vue.createApp(App).mount('#app');
