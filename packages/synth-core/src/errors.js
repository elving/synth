const throwTokenConfigError = (value) => {
  throw new Error(
    `Expected a valid Synth token configuration, got "${JSON.stringify(
      value,
    )}" instead.`,
  )
}

const throwTokenError = (value) => {
  throw new Error(
    `Expected a valid Synth token, got "${JSON.stringify(value)}" instead.`,
  )
}

const throwCategoryError = (value) => {
  throw new Error(
    `Expected a valid Synth token category, got "${JSON.stringify(
      value,
    )}" instead.`,
  )
}

const throwAliasError = (value) => {
  throw new Error(
    `Expected a valid Synth token alias, got "${JSON.stringify(
      value,
    )}" instead.`,
  )
}

export {
  throwAliasError,
  throwCategoryError,
  throwTokenConfigError,
  throwTokenError,
}
