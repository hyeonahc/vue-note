<template>
  <InputBindingMethod />
  <hr />
  <InputBindingInline />
  <hr />
  <InputBindingVmodel />
  <hr />
  <ModifiersLazy />
  <hr />
  <ModifiersNumber />
  <hr />
  <ModifiersTrim />
  <hr />
</template>

<script>
import InputBindingMethod from './components/InputBindingMethod.vue';
import InputBindingInline from './components/InputBindingInline.vue';
import InputBindingVmodel from './components/InputBindingVmodel.vue';
import ModifiersLazy from './components/ModifiersLazy.vue';
import ModifiersNumber from './components/ModifiersNumber.vue';
import ModifiersTrim from './components/ModifiersTrim.vue';

export default {
  name: 'App',
  components: {
    InputBindingMethod,
    InputBindingInline,
    InputBindingVmodel,
    ModifiersLazy,
    ModifiersNumber,
    ModifiersTrim,
  },
};
</script>

<style></style>
