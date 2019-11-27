import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `color` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { color } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${color('primary')} => color: #333;
 * `)
 */
declare function color(tokenName?: string): <T>(props: T) => string

export default color
