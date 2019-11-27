import * as React from 'react'
import { SynthButtonProps } from '../Button'

interface SynthClickableProps extends SynthButtonProps {}
type SynthClickableComponent = React.ComponentType<SynthClickableProps>
declare const Clickable: React.ForwardRefExoticComponent<SynthClickableProps>

export { SynthClickableComponent, SynthClickableProps }
export default Clickable
