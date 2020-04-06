import * as React from 'react'
import * as styled from 'styled-components'
import * as SynthReact from '@beatgig/synth-react'

interface SynthStyledComponentProps {
  synth?: SynthReact.SynthConsumerProps
  className?: string
}

declare type SynthStyledComponent<
  T extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType<P>
    | React.RefForwardingComponent<any, P>,
  P = {}
> = styled.StyledComponent<
  T,
  any,
  P & SynthStyledComponentProps & React.ComponentPropsWithRef<T>,
  never
>

export { default as bindings, SynthStyledComponentsBindings } from './bindings'
export { SynthStyledComponentProps, SynthStyledComponent }

export declare const animationDelay: SynthStyledComponentsBindings['animationDelay']
export declare const animationDuration: SynthStyledComponentsBindings['animationDuration']
export declare const animationTimingFunction: SynthStyledComponentsBindings['animationTimingFunction']
export declare const backgroundColor: SynthStyledComponentsBindings['backgroundColor']
export declare const border: SynthStyledComponentsBindings['border']
export declare const borderColor: SynthStyledComponentsBindings['borderColor']
export declare const borderRadius: SynthStyledComponentsBindings['borderRadius']
export declare const borderStyle: SynthStyledComponentsBindings['borderStyle']
export declare const borderWidth: SynthStyledComponentsBindings['borderWidth']
export declare const bottom: SynthStyledComponentsBindings['bottom']
export declare const boxShadow: SynthStyledComponentsBindings['boxShadow']
export declare const color: SynthStyledComponentsBindings['color']
export declare const fontFamily: SynthStyledComponentsBindings['fontFamily']
export declare const fontSize: SynthStyledComponentsBindings['fontSize']
export declare const fontStyle: SynthStyledComponentsBindings['fontStyle']
export declare const fontWeight: SynthStyledComponentsBindings['fontWeight']
export declare const height: SynthStyledComponentsBindings['height']
export declare const left: SynthStyledComponentsBindings['left']
export declare const letterSpacing: SynthStyledComponentsBindings['letterSpacing']
export declare const lineHeight: SynthStyledComponentsBindings['lineHeight']
export declare const margin: SynthStyledComponentsBindings['margin']
export declare const marginBottom: SynthStyledComponentsBindings['marginBottom']
export declare const marginLeft: SynthStyledComponentsBindings['marginLeft']
export declare const marginRight: SynthStyledComponentsBindings['marginRight']
export declare const marginTop: SynthStyledComponentsBindings['marginTop']
export declare const maxHeight: SynthStyledComponentsBindings['maxHeight']
export declare const maxWidth: SynthStyledComponentsBindings['maxWidth']
export declare const minHeight: SynthStyledComponentsBindings['minHeight']
export declare const minWidth: SynthStyledComponentsBindings['minWidth']
export declare const opacity: SynthStyledComponentsBindings['opacity']
export declare const padding: SynthStyledComponentsBindings['padding']
export declare const paddingBottom: SynthStyledComponentsBindings['paddingBottom']
export declare const paddingLeft: SynthStyledComponentsBindings['paddingLeft']
export declare const paddingRight: SynthStyledComponentsBindings['paddingRight']
export declare const paddingTop: SynthStyledComponentsBindings['paddingTop']
export declare const right: SynthStyledComponentsBindings['right']
export declare const textAlign: SynthStyledComponentsBindings['textAlign']
export declare const textDecoration: SynthStyledComponentsBindings['textDecoration']
export declare const textTransform: SynthStyledComponentsBindings['textTransform']
export declare const top: SynthStyledComponentsBindings['top']
export declare const transitionDelay: SynthStyledComponentsBindings['transitionDelay']
export declare const transitionDuration: SynthStyledComponentsBindings['transitionDuration']
export declare const transitionTimingFunction: SynthStyledComponentsBindings['transitionTimingFunction']
export declare const width: SynthStyledComponentsBindings['width']
export declare const zIndex: SynthStyledComponentsBindings['zIndex']
