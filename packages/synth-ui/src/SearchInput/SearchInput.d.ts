import * as React from 'react'
import { SynthInputProps } from '../Input'

interface SynthSearchInputProps extends SynthInputProps {}
type SynthSearchInputComponent = React.ComponentType<SynthSearchInputProps>
declare const SearchInput: React.ForwardRefExoticComponent<SynthSearchInputProps>

export { SynthSearchInputComponent, SynthSearchInputProps }
export default SearchInput
