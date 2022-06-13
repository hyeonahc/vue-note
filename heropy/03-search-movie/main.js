// 컴포넌트
const App = {
  data() {
    return {
      title: '',
      movies: [],
      total: 0,
      page: 1,
      showObserver: true,
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
    hasTheRest() {
      return this.total > this.movies.length;
    },
  },
  // 라이프사이클 훅 created(): Vue.js 어플리케이션이 생성된 직후에 실행되는 함수
  mounted() {
    console.log('created');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('교차되었음');
          this.searchMovies();
        }
      });
    });
    io.observe(this.$refs.observer);
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
      this.total = parseInt(totalResults);
      console.log(this.total);
      this.showObserver = false;
      // setTimeout의 두번째 파라미터로 들어가는 지연시간은 기본값이 0이므로 생략해준다
      // setTimeout의 시간지연 기능은 자바스크립트가 수행하지 않고 브라우저 즉 Web API가 시간지연 기능을 수행해준다
      // setTimeout 대신 Vue에서 제공하는 메서드 nextTick을 사용할 수 있다
      // nextTick: 화면이 갱신되고 난 후에 실행하는 함수
      // await this.$nextTick();
      // this.showObserver = true;
      setTimeout(() => {
        this.showObserver = true;
      });
    },
  },
};

Vue.createApp(App).mount('#app');

// this.$refs.observer
