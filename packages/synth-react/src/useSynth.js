import { useContext } from 'react'

import { SynthProvider, SynthConsumer } from './SynthContext'

const useSynth = () =>
  useContext({ Consumer: SynthConsumer, Provider: SynthProvider })

export default useSynth
