declare function getIntentColor(
  intent: 'none' | 'danger' | 'success' | 'highlight',
  defaultIntent?: string,
): string

export default getIntentColor
