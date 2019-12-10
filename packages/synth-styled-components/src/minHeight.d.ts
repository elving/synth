import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `min-height` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { minHeight } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${minHeight('primary')} => min-height: 50px;
 * `)
 */
declare function minHeight(tokenName?: string): <T>(props: T) => string

export default minHeight
