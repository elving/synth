import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `margin` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { margin } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${margin('primary')} => margin: 10px 15px;
 * `)
 */
declare function margin(tokenName?: string): <T>(props: T) => string

export default margin
