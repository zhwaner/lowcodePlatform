<script setup lang="ts">
import { defineRule, useFieldArray, useForm } from 'vee-validate'
import { watch } from 'vue'

import type { TextBlock } from '@/types/block'

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return 'This field is required'
  }
  return true
})

const props = defineProps<{
  block: TextBlock
}>()

const emit = defineEmits<{
  change: [block: TextBlock]
}>()

const { defineField, errors, values, isFieldTouched } = useForm({
  validationSchema: {
    content: 'required',
  },
  initialValues: {
    content: props.block.props.content,
    person: {
      name: '张三',
      hobby: ['篮球', '足球'],
    },
  },
})

const { fields, push } = useFieldArray('person.hobby')

const [content, contentAttr] = defineField('content')

watch(content, (value) => {
  console.log('isFieldTouched字段有没有聚焦', isFieldTouched('content'))
  handleChange(value)
})

const handleChange = (content: string) => {
  const block = { ...props.block, props: { ...props.block.props, content } }
  emit('change', block)
}
</script>

<template>
  <!-- <input
    v-model="content"
    v-bind="contentAttr"
    class="content"
    :value="props.block.props.content"
    @change="(ev) => handleChange((ev.target as HTMLInputElement).value)"
  /> -->
  <input v-model="content" v-bind="contentAttr" class="content" />
  <p style="color: red">
    {{ errors.content }}
  </p>
  <div v-for="field in fields" :key="field.key">
    {{ field.key }}
    <input v-model="field.value" />
  </div>
  <button @click="() => push('')">动态添加</button>
  <button @click="() => console.log(JSON.stringify(values))">查看数据</button>
</template>

<style scoped>
.content {
  width: 100%;
}
</style>
