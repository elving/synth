/**
 * @param {{ value: string, label: string }[]} createdTags
 * @param {{ value: string, label: string }} tag
 * @returns {{ value: string, label: string }[]}
 */
const removeCreatedTag = (createdTags, tag) =>
  createdTags.filter((createdTag) => createdTag.value !== tag.value)

export default removeCreatedTag
