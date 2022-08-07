<template>
  <div>{{ movie.Title }}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      // 객체, 배열 데이터는 함수로 만들어서 반환
      default: () => ({})
      // 위와 같은 로직
      // default: function() { return {} }
    }
  }
}
</script>