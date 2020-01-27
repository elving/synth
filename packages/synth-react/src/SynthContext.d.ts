import * as React from 'react'
import * as SynthCore from '@beatgig/synth-core'
import * as SynthCSS from '@beatgig/synth-css'

interface SynthConsumerProps extends SynthCSS.Bindings {
  getUnit(string): string
  getValue(string): string
  tokens: SynthCore.SynthTokenConfiguration
}

/**
 * @since 1.0.0
 */
declare const SynthConsumer: React.ExoticComponent<React.ConsumerProps<
  SynthConsumerProps
>>

/**
 * @since 1.0.0
 */
declare const SynthProvider: React.ProviderExoticComponent<React.ProviderProps<
  SynthConsumerProps
>>

export { SynthConsumer, SynthProvider, SynthConsumerProps }
