import React from 'react'

interface reactProp {

  Component : React.ComponentType
}

function Protected({Component} : reactProp) {
  return (
    <Component/>
  )
}

export default Protected