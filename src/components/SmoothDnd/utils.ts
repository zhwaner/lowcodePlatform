import type { Ref } from 'vue'

/**
 * 验证标签属性的有效性
 * @param tag 标签属性，可以为字符串、对象或未定义
 * @returns 如果标签属性有效，则返回true；否则返回false
 */
export function validateTagProp(tag?: Ref) {
  if (tag) {
    if (typeof tag === 'string') {
      return true
    }
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * 获取标签的属性
 *
 * @param ctx 上下文对象
 * @param tagClass 可选的标签类名
 * @returns 包含标签值和属性的对象
 */
export function getTagProps(ctx: any, tagClass?: string) {
  const tag = ctx.$props.tag
  if (tag) {
    if (typeof tag === 'string') {
      const result: any = { value: tag }
      if (tagClass) {
        result.props = { class: tagClass }
      }
      return result
    } else if (typeof tag === 'object') {
      const result = { value: tag.value || 'div', props: tag.props || {} }
      if (tagClass) {
        if (result.props.class) {
          if (Array.isArray(result.props.class)) {
            result.props.class.push(tagClass)
          } else {
            result.props.class = [tagClass, result.props.class]
          }
        } else {
          result.props.class = tagClass
        }
      }
      return result
    }
  }
  return { value: 'div' }
}
