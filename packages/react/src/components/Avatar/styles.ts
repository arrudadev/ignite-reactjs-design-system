import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-block',

  width: '$12',
  height: '$12',

  borderRadius: '$full',

  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',

  objectFit: 'cover',

  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  backgroundColor: '$gray600',

  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
