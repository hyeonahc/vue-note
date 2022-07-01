<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
	props: {
		modelValue: {
			type: String,
			default: ''
		}
	},
	emits: ['update:modelValue']
}
</script>

<style scoped>
/* scoped: 스타일의 유효범위를 정해주는 키워드 */
input {
	background-color: rosybrown;
}
</style>
