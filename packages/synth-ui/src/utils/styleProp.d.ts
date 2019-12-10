/**
 * Gets the value of the given prop from a styled component.
 */
declare function styleProp(propName: string): <T>(props: T) => string

export default styleProp
