<template>
  <ClassBindingObj />
  <hr />
  <ClassBindingObjExternal />
  <hr />
  <ClassBindingArr />
  <hr />
  <StyleBindingObj />
  <hr />
  <StyleBindingArr />
</template>

<script>
import ClassBindingObj from './components/ClassBindingObj.vue';
import ClassBindingObjExternal from './components/ClassBindingObjExternal.vue';
import ClassBindingArr from './components/ClassBindingArr.vue';
import StyleBindingObj from './components/StyleBindingObj.vue';
import StyleBindingArr from './components/StyleBindingArr.vue';

export default {
  name: 'App',
  components: {
    ClassBindingObj,
    ClassBindingObjExternal,
    ClassBindingArr,
    StyleBindingObj,
    StyleBindingArr,
  },
};
</script>

<style></style>
