import { isNil } from '@beatgig/is'

/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {{ value: string, label: string }} tag
 * @returns {boolean}
 */
const tagIsSelected = (selectedTags, tag) =>
  !isNil(selectedTags.find((selectedTag) => selectedTag.value === tag.value))

export default tagIsSelected
