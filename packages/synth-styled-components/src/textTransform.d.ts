import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `text-transform` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { textTransform } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${textTransform('primary')} => text-transform: uppercase;
 * `)
 */
declare function textTransform(tokenName?: string): <T>(props: T) => string

export default textTransform
