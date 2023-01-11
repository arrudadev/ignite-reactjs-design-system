import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
