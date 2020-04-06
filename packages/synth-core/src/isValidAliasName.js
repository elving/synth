import { isString } from '@beatgig/is'

const isValidAliasName = (tokenValue) =>
  isString(tokenValue) && tokenValue.startsWith('@')

export default isValidAliasName
