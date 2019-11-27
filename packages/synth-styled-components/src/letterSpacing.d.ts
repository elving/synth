import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `letter-spacing` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { letterSpacing } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${letterSpacing('primary')} => letter-spacing: 1px;
 * `)
 */
declare function letterSpacing(tokenName?: string): <T>(props: T) => string

export default letterSpacing
