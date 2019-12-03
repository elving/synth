import * as React from 'react'
import { SynthInputProps } from '../Input'

interface SynthEditableProps extends SynthInputProps {}
type SynthEditableComponent = React.ComponentType<SynthEditableProps>

/**
 * @since 1.1.0
 */
declare const Editable: React.ForwardRefExoticComponent<SynthEditableProps>

export { SynthEditableComponent, SynthEditableProps }
export default Editable
