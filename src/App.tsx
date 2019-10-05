import React from 'react'
import Header from './components/Header'
import Form from './components/Form'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="React Wheater"></Header>
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
