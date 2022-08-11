<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      class="form-control"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			type: 'movie',
			number: 10,
			year: '',
			filters: [
				{
					name: 'type',
					items: ['movie', 'series', 'episode']
				}, 
				{
					name: 'number',
					items: [10, 20, 30]
				}, 
				{
					name: 'year',
					items: (() => {
						const years = []
						const thisYear = new Date().getFullYear()
						for(let i = thisYear; i >= 1985; i -= 1) {
							years.push(i)
						}
						return years
					})()
				}
			]
		}
	},
	methods: {
		// $store의 메서드 두가지
		// method('저장소이름/함수이름', payload)
		// 메서드에서 사용하는 저장소 이름은 index.js에 modules의 key값을 가리킨다
		// 즉 index.js에 modules의 key 이름과 method에서 사용하는 저장소 이름은 같아야한다
		// payload: 함수로 전달할 인자
		// 1. commit(): mutations 안에 있는 함수를 실행할때 사용하는 메서드
		// 2. dispatch(): actions 안에 있는 함수를 실행할때 사용하는 메서드
		async apply() {
			this.$store.dispatch('movie/searchMovies', {
				title: this.title,
				type: this.type,
				number: this.number,
				year: this.year
			})
		}
	}
}
</script>

<style lang="scss" scoped>

.container {
	display: flex;
	/* container에 모든 자식요소를 선택 */
	> * {
		margin-right: 10px;
		font-size: 15px;
		&:last-child {
			margin-right: 0;
		}
	}
	.selects {
		display: flex;
		select {
			width: 120px;
			margin-right: 10px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.btn {
		width: 120px;
		height: 50px;
		font-weight: 700;
		flex-shrink: 0;
	}
	@include media-breakpoint-down(lg) {
		display: block;
		input {
			margin-right: 0;
			margin-bottom: 10px;
		}
		.selects {
			margin-right: 0;
			margin-bottom: 10px;
			select {
				width: 100%;
			}
		}
		.btn {
			width: 100%;
		}
	}
}
</style>