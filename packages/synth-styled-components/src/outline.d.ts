import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `outline` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { outline } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${outline('primary')}
 *   => outline-width: 5px;
 *   => outline-style: solid;
 *   => outline-color: blue;
 *   => outline-offset: 1px;
 * `)
 */
declare function outline(tokenName?: string): <T>(props: T) => string

export default outline
