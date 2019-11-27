import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `max-width` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { maxWidth } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${maxWidth('primary')} => max-width: 100px;
 * `)
 */
declare function maxWidth(tokenName?: string): <T>(props: T) => string

export default maxWidth
