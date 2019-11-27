import * as React from 'react'

declare function withForwardedRef<T>(
  Component: React.ComponentType<T>,
): React.ForwardRefExoticComponent<T>

export default withForwardedRef
