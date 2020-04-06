type SynthCategory =
  | 'color'
  | 'motion'
  | 'position'
  | 'size'
  | 'space'
  | 'style'
  | 'typography'

type SynthProperty =
  | 'aliases'
  | 'background'
  | 'border'
  | 'bottom'
  | 'decoration'
  | 'delay'
  | 'duration'
  | 'effect'
  | 'font'
  | 'height'
  | 'index'
  | 'left'
  | 'lineHeight'
  | 'margin'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'opacity'
  | 'padding'
  | 'radius'
  | 'right'
  | 'shadow'
  | 'spacing'
  | 'text'
  | 'top'
  | 'transform'
  | 'weight'
  | 'width'

type SynthState = 'active' | 'default' | 'disabled' | 'focus' | 'hover'

type SynthTokenValue =
  | string
  | number
  | string[]
  | number[]
  | (string | number)[]

interface SynthTokenMetadata {
  [key: string]: any
  description?: string
  release?: string
  value: SynthTokenValue
}

interface SynthTokenState {
  active?: SynthTokenValue | SynthTokenMetadata
  default: SynthTokenValue | SynthTokenMetadata
  disabled?: SynthTokenValue | SynthTokenMetadata
  focus?: SynthTokenValue | SynthTokenMetadata
  hover?: SynthTokenValue | SynthTokenMetadata
}

type SynthTokenContent = SynthTokenValue | SynthTokenMetadata | SynthTokenState

interface SynthTokenStructure {
  category: SynthCategory
  property: SynthProperty
  name: string
  state?: SynthState
}

interface SynthTokenConfiguration {
  color?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    background?: {
      [key: string]: SynthTokenContent
    }
    border?: {
      [key: string]: SynthTokenContent
    }
    shadow?: {
      [key: string]: SynthTokenContent
    }
    text?: {
      [key: string]: SynthTokenContent
    }
  }
  motion?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    delay?: {
      [key: string]: SynthTokenContent
    }
    duration?: {
      [key: string]: SynthTokenContent
    }
    effect?: {
      [key: string]: SynthTokenContent
    }
  }
  position?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    bottom?: {
      [key: string]: SynthTokenContent
    }
    index?: {
      [key: string]: SynthTokenContent
    }
    left?: {
      [key: string]: SynthTokenContent
    }
    right?: {
      [key: string]: SynthTokenContent
    }
    shadow?: {
      [key: string]: SynthTokenContent
    }
    text?: {
      [key: string]: SynthTokenContent
    }
    top?: {
      [key: string]: SynthTokenContent
    }
  }
  size?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    border?: {
      [key: string]: SynthTokenContent
    }
    height?: {
      [key: string]: SynthTokenContent
    }
    maxHeight?: {
      [key: string]: SynthTokenContent
    }
    maxWidth?: {
      [key: string]: SynthTokenContent
    }
    minHeight?: {
      [key: string]: SynthTokenContent
    }
    minWidth?: {
      [key: string]: SynthTokenContent
    }
    radius?: {
      [key: string]: SynthTokenContent
    }
    shadow?: {
      [key: string]: SynthTokenContent
    }
    text?: {
      [key: string]: SynthTokenContent
    }
    width?: {
      [key: string]: SynthTokenContent
    }
  }
  space?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    margin?: {
      [key: string]: SynthTokenContent
    }
    padding?: {
      [key: string]: SynthTokenContent
    }
  }
  style?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    border?: {
      [key: string]: SynthTokenContent
    }
    text?: {
      [key: string]: SynthTokenContent
    }
    opacity?: {
      [key: string]: SynthTokenContent
    }
  }
  typography?: {
    aliases?: {
      [key: string]: SynthTokenValue | SynthTokenMetadata
    }
    decoration?: {
      [key: string]: SynthTokenContent
    }
    font?: {
      [key: string]: SynthTokenContent
    }
    lineHeight?: {
      [key: string]: SynthTokenContent
    }
    spacing?: {
      [key: string]: SynthTokenContent
    }
    transform?: {
      [key: string]: SynthTokenContent
    }
    weight?: {
      [key: string]: SynthTokenContent
    }
  }
}

export {
  SynthCategory,
  SynthProperty,
  SynthState,
  SynthTokenConfiguration,
  SynthTokenContent,
  SynthTokenMetadata,
  SynthTokenState,
  SynthTokenStructure,
  SynthTokenValue,
}

export {
  throwAliasError,
  throwCategoryError,
  throwTokenConfigError,
  throwTokenError,
}

export { default as getToken } from './getToken'
export { default as getTokenAliasValue } from './getTokenAliasValue'
export { default as getTokenDescription } from './getTokenDescription'
export { default as getTokenRelease } from './getTokenRelease'
export { default as getTokenStructure } from './getTokenStructure'
export { default as getTokenValue } from './getTokenValue'
export { default as isValidToken } from './isValidToken'
export { default as isValidTokenConfig } from './isValidTokenConfig'
export { default as tokenHasMetadata } from './tokenHasMetadata'
export { default as tokenHasStates } from './tokenHasStates'
export { default as isValidAliasName } from './isValidAliasName'
