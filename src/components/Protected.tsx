import React from 'react'
import { useSelector } from 'react-redux'
import auth from '../types/authType'
import Start from '../pages/Start'
import { useNavigate } from 'react-router-dom'

interface reactProp {
  Component : React.ComponentType
}



import { useEffect } from 'react'

function Protected({Component} : reactProp) {
  const hasStarted = useSelector<auth>(state => state.hasStarted)
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasStarted) {
      navigate('/')
    }
  }, []);


  if (hasStarted) {

    return <Component />
  }else{
    
    return <Start/>
  }
}

export default Protected