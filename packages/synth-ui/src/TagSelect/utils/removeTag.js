/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {{ value: string, label: string }} tag
 * @returns {{ value: string, label: string }[]}
 */
const removeTag = (selectedTags, tag) =>
  selectedTags.filter((selectedTag) => selectedTag.value !== tag.value)

export default removeTag
