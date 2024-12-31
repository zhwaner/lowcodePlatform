// 数组的相关操作放这里
/**
 * 将数组中的元素从指定位置移动到另一个位置。
 *
 * @param arr 要操作的数组
 * @param from 要移动元素的起始索引
 * @param to 要移动元素的目标索引
 * @returns 移动元素后的新数组
 */
export const arrayMove = <T>(arr: T[], from: number, to: number) => {
  const newArr = arr.slice()
  newArr.splice(to < 0 ? newArr.length + to : to, 0, newArr.splice(from, 1)[0])
  // newArr.splice(from, 1)
  // newArr.splice(to, 0, arr[from])
  return newArr
}
