export interface BaseBlock {
  id: string
  type: string
}

export interface TextBlock extends BaseBlock {
  type: 'text'
  props: {
    content: string
  }
  actions?: {
    onCopy: () => void
  }
}

export interface ChartBlock extends BaseBlock {
  type: 'chart'
  props: {
    content: string
  }
}

export interface ImageBlock extends BaseBlock {
  type: 'image'
  props: {
    src: string
    alt?: string
  }
}

export type Block = TextBlock | ChartBlock | ImageBlock
