<template>
  <header>
    <!-- RouterLink가 active한 상태이면 라우터에서 자동으로 active-class="router-link-active"를 부여한다 -->
    <!-- 만약 active된 클래스 이름을 변경하고 싶으면 active-class="새로운 이름"을 넣어주면된다 -->
    <RouterLink
      to="/"
      active-class="active">
      Home
    </RouterLink>
    <RouterLink
      to="/about"
      active-class="active">
      About
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
/* active-class의 기본값을 변경하지 않았을 경우 default 값으로 접근한다
.router-link-active {
	스타일 코드	
} 
*/
.active {
	color: tomato;
}
</style>
