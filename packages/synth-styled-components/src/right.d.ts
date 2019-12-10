import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `right` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { right } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${right('primary')} => right: 10px;
 * `)
 */
declare function right(tokenName?: string): <T>(props: T) => string

export default right
