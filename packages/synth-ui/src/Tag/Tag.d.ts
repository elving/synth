import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface TagProps {
  /**
   * The elements you want to display within the tag.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type TagComponentProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & TagProps

type TagComponent = SynthReact.SynthComponent<TagComponentProps, HTMLElement>

/**
 * @since 1.2.0
 */
declare const Tag: TagComponent

export { TagComponent, TagComponentProps, TagProps }
export default Tag
