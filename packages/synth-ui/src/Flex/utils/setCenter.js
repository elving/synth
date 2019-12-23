/**
 * Will set css rules for centering (align-items, place-content) based on the
 * current component's props.
 * @typedef {object} Props
 * @property {boolean} center
 * @property {boolean} centerX
 * @property {boolean} centerY
 * @property {boolean} column
 * @returns {<T>(props: T & Props) => string}
 */
const setCenter = () => ({ center, centerX, centerY, column }) => {
  if (center) {
    return `
      align-items: center; 
      justify-content: center;
    `
  } else if (centerX) {
    return column ? 'align-items: center;' : 'justify-content: center;'
  } else if (centerY) {
    return column ? 'justify-content: center;' : 'align-items: center;'
  }
}

export default setCenter
