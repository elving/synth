import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `max-height` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { maxHeight } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${maxHeight('primary')} => max-height: 55px;
 * `)
 */
declare function maxHeight(tokenName?: string): <T>(props: T) => string

export default maxHeight
