import React from 'react'

interface Error {
  message: string
}

function Error({ message }: Error) {
  return <div className="card-panel red error col s12">{message}</div>
}

export default Error
