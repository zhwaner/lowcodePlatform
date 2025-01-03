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
      src: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: '图片',
    },
  },
]
