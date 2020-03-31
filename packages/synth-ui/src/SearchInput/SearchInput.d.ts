import * as React from 'react'

import { InputProps } from '../Input'

interface SearchInputProps extends InputProps {}

type SearchInputComponentProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SearchInputProps

type SearchInputComponent = SynthReact.SynthComponent<
  SearchInputComponentProps,
  HTMLInputElement
>

/**
 * @since 1.3.0
 */
declare const SearchInput: SearchInputComponent

export { SearchInputComponent, SearchInputComponentProps, SearchInputProps }
export default SearchInput
