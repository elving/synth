/**
 * Will set css rules for dimensions (width, height, flex-basis) based on the
 * current component's props.
 * @typedef {object} Props
 * @property {boolean} full
 * @property {boolean} fullHeight
 * @property {boolean} fullWidth
 * @returns {<T>(props: T & Props) => string}
 */
const setFull = () => ({ full, fullWidth, fullHeight }) => {
  if (full) {
    return `
      width: 100%;
      height: 100%;
      flex-basis: 100%;      
    `
  } else if (fullWidth) {
    return `
      width: 100%;
      flex-basis: 100%;      
    `
  } else if (fullHeight) {
    return `
      height: 100%;
      flex-basis: 100%;      
    `
  }

  return ''
}

export default setFull
