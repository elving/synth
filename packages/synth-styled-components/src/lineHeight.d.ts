import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `line-height` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { letterHeight } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${letterHeight('primary')} => line-height: 1.25;
 * `)
 */
declare function lineHeight(tokenName?: string): <T>(props: T) => string

export default lineHeight
