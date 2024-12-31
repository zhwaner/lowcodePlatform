import type { Block } from '@/types/block'

export const blocks: Block[] = [
  {
    id: '1',
    type: 'text',
    props: {
      content: 'Hello, world!',
    },
    actions: {
      onCopy: () => {
        console.log('copied')
      },
    },
  },
  {
    id: '2',
    type: 'image',
    props: {
      src: '/assets/images/example.png',
    },
  },
]
