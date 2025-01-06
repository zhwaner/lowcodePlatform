// 这个定义方法非常死板
export class Calculator {
  add(a: number, b: number) {
    return a + b
  }
  subtract(a: number, b: number) {
    return a - b
  }
  multiply(a: number, b: number) {
    return a * b
  }
  divide(a: number, b: number) {
    return a / b
  }
}

// 我能不能将计算器的功能定义，暴露给外部，让外部给我增加功能
export class CalculatorPlugins {
  private plugins: any[] = []
  use(plugin: any) {
    this.plugins.push(plugin)
  }
  run(a: number, b: number) {
    const plugins = this.plugins

    return plugins.reduce((result, plugin) => {
      return plugin(result)
    }, a + b)
  }
}

const plugin1 = (result: number) => {
  return result + 1
}
const plugin2 = (result: number) => {
  return result + 2
}

const plugin = new CalculatorPlugins()
plugin.use(plugin1)
plugin.use(plugin2)
console.log(plugin.run(1, 2))
