<!-- 3. 컴포넌트 Emit -->
<template>
  <!-- 컴포넌트의 최상위 요소에 부모 컴포넌트에서 클릭이벤트를 전달받았다 -->
  <div class="btn">
    <slot></slot>
  </div>
  <!-- 부모 컴포넌트에서 상속받고 싶은 이벤트를 emits의 배열에 등록해 사용해주었다 -->
  <!-- emits 배열에 등록된 이벤트를 사용하기 위해 emit 메서드를 실행시켜준다 -->
  <!-- 부모 컴포넌트에서 click 이벤트는 log라는 메서드를 실행시키므로 해당 요소를 클릭했을때 부모 컴포넌트와 마찬가지로 log 메서드를 실행시킨다 -->
  <div class="btn" @click="$emit('click')">
    <slot></slot>
  </div>
  <!-- 이름은 관계 없음 -->
  <div class="btn" @click="$emit('writeClick')">
    <slot></slot>
  </div>
  <!-- emit으로 이벤트객체 활용하기 -->
  <!-- $event로 이벤트 객체 넘겨주기 -->
  <div class="btn" @click="$emit('writeClick', $event)">
    <slot></slot>
  </div>
  <div><input type="text" v-model="msg" /></div>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  // inheritAttrs 옵션이 false면 부모 컴포넌트에서 상속이 이루어지지 않는다
  // inheritAttrs: false,
  // 부모 컴포넌트에서 상속하고 싶은 모든 이벤트를 배열로 만든 후 요소에 사용하고 싶은 이벤트를 꺼내 쓴다
  emits: ['click', 'writeClick', 'changeMsg'],
  data() {
    return {
      msg: '',
    };
  },
  watch: {
    // watch는 어떤 데이터를 계속 감시하는 옵션이다
    // 감시하고 싶은 데이터를 메소드로 만들어주고 그 안에 해당 데이터가 변화될때마다 실행하고 싶은 로직을 넣어준다
    msg() {
      // msg 데이터가 변화될때마다 msg() 메서드가 실행된다
      // $emit() 메서드로 emits에 등록된 이벤트를 실행해준다
      // 부모 컴포넌트에 등록된 이벤트: @change-msg="logMsg"
      // changeMsg는 logMsg 메서드를 실행해준다
      // 결론적으로 msg 데이터에 변화 생기면 부모 컴포넌트에 등록된 logMsg 메서드가 실행된다
      // logMsg는 msg라는 변수를 콘솔창에 출력하는 메서드다
      // logMsg 메서드에 msg 변수는 this.msg를 받는다
      // this.msgs는 v-bind로 연결된 양방향데이터이므로 업데이트된 msg 데이터다=
      this.$emit('changeMsg', this.msg);
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
}
</style>
