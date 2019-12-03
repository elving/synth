import * as React from 'react'
import { SynthButtonProps } from '../Button'

interface SynthClickableProps extends SynthButtonProps {}
type SynthClickableComponent = React.ComponentType<SynthClickableProps>

/**
 * @since 1.0.0
 */
declare const Clickable: React.ForwardRefExoticComponent<SynthClickableProps>

export { SynthClickableComponent, SynthClickableProps }
export default Clickable
