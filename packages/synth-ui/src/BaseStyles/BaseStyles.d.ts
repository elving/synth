import * as styled from 'styled-components'
import * as SynthCore from '@beatgig/synth-core'

/**
 * @since 1.0.0
 */
declare const BaseStyles: styled.GlobalStyleComponent<
  SynthCore.SynthTokenDeclaration,
  styled.DefaultTheme
>

declare module '*.woff' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}

export default BaseStyles
