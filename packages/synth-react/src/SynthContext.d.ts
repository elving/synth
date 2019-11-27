import * as React from 'react'
import { SynthTokenDeclaration } from '@beatgig/synth-core'
import { SynthCSSBindings } from '@beatgig/synth-css'

interface SynthConsumerProps extends SynthCSSBindings {
  getUnit(string): string
  getValue(string): string
  tokens: SynthTokenDeclaration
}

declare const SynthConsumer: React.ExoticComponent<React.ConsumerProps<
  SynthConsumerProps
>>

declare const SynthProvider: React.ProviderExoticComponent<React.ProviderProps<
  SynthConsumerProps
>>

export { SynthConsumer, SynthProvider, SynthConsumerProps }
