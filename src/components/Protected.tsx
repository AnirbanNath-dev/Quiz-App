import React from 'react'
import { useSelector } from 'react-redux'
import auth from '../types/authType'
import Start from '../pages/Start'

interface reactProp {

  Component : React.ComponentType
}

function Protected({Component} : reactProp) {

  const hasStarted = useSelector<auth>(state => state.hasStarted)

  if (hasStarted) {
    return <Component />
  }else{
    return <Start/>
  }
}

export default Protected