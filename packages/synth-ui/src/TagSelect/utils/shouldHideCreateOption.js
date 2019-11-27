import { isNil, isString } from '@beatgig/is'

/**
 * @param {{ value: string, label: string }[]} filteredTags
 * @param {string} filter
 * @returns {boolean}
 */
const shouldHideCreateOption = (filteredTags, filter) =>
  filter &&
  !isNil(
    filteredTags.find((filteredTag) =>
      isString(filteredTag.value)
        ? filteredTag.value.toLowerCase()
        : filteredTag.value === filter.toLowerCase() ||
          filteredTag.label.toLowerCase() === filter.toLowerCase(),
    ),
  )

export default shouldHideCreateOption
