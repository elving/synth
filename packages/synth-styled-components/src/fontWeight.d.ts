import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `font-weight` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { fontWeight } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${fontWeight('primary')} => font-weight: 300;
 * `)
 */
declare function fontWeight(tokenName?: string): <T>(props: T) => string

export default fontWeight
