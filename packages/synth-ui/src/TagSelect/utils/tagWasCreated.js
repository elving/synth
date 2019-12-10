import { isNil } from '@beatgig/is'

/**
 * @param {{ value: string, label: string }[]} createdTags
 * @param {{ value: string, label: string }} tag
 * @returns {boolean}
 */
const tagWasCreated = (createdTags, tag) =>
  !isNil(createdTags.find((createdTag) => createdTag.value === tag.value))

export default tagWasCreated
