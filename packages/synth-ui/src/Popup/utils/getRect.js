/**
 * @param {{ current: null|HTMLElement }} elementRef
 * @returns {object|DOMRect}
 */
const getRect = (elementRef = { current: null }) =>
  elementRef.current
    ? elementRef.current.getBoundingClientRect()
    : {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
        bottom: 0,
      }

export default getRect
