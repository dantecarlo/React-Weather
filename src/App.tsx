import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

const App: React.FC = () => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)

  const getFormData = (data: any) => {
    // Validate Data
    if (data.city === '' || data.country === '') {
      // error
      setError(true)
      return
    }

    setCity(data.city)
    setCountry(data.country)
    setError(false)
  }

  return (
    <div className="App">
      <Header title="React Wheater"></Header>
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form getFormData={getFormData}></Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
