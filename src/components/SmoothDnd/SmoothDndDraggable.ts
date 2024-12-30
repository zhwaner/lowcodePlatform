import { defineComponent, h } from 'vue'
import { getTagProps, validateTagProp } from './utils'
import { constants } from 'smooth-dnd'

export const SmoothDndDraggable = defineComponent({
  name: 'SmoothDndDraggable',
  props: {
    tag: {
      validator: validateTagProp,
      default: 'div',
    },
  },
  render() {
    const tapProps = getTagProps(this, constants.wrapperClass)
    return h(tapProps.value, Object.assign({}, tapProps.props), this.$slots?.default?.())
  },
})
