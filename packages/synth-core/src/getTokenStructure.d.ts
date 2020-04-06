import { SynthTokenStructure } from './'

/**
 * @since 2.0.0
 * @description Gets the structure of a token given valid token selector.
 * @example
 * getTokenStructure('color:background:button') => { category: 'color', property: 'background', name: 'button' }
 * getTokenStructure('color:text:btn:hover') => { category: 'color', property: 'text', name: 'btn', state: 'hover' }
 */
declare function getTokenStructure(token: string): SynthTokenStructure

export default getTokenStructure
