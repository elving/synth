/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {{ value: string, label: string }[]} filteredTags
 * @returns {{ value: string, label: string }[]}
 */
const getUnselectedTags = (selectedTags, filteredTags) => {
  const selected = selectedTags.map((selectedTag) => selectedTag.value)

  return filteredTags.filter(
    (filteredTag) => !selected.includes(filteredTag.value),
  )
}

export default getUnselectedTags
