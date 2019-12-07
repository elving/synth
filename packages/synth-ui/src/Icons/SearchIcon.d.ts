import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface SearchIconProps extends IconProps {}

type SearchIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SearchIconProps

type SearchIconComponent = SynthReact.SynthComponent<
  SearchIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const SearchIcon: SearchIconComponent

export { SearchIconComponent, SearchIconComponentProps, SearchIconProps }
export default SearchIcon
