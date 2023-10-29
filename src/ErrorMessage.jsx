import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">A really bad error has occured: {error.toString()}</div>
)

export default ErrorMessage
