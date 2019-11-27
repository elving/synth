/**
 * @typedef {object} Props
 * @property {number} scale
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const getScale = () => ({ scale, synth }) => synth.getUnit(`@avatars.${scale}`)

export default getScale
