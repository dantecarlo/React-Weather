import React, { useState } from 'react'

interface FormProps {
  getFormData(data: any): any
}

function Form({ getFormData }: FormProps) {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  })

  const handleChange = (e: any) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const getWeather = (e: any) => {
    e.preventDefault()
    getFormData(search)
  }

  return (
    <form onSubmit={getWeather}>
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select name="country" onChange={handleChange}>
          <option value="">Select a country</option>
          <option value="PE">Peru</option>
          <option value="AR">Argentina</option>
          <option value="US">United States</option>
          <option value="CO">Colombia</option>
          <option value="MX">Mexico</option>
          <option value="ES">Spain</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Search Weather"
        />
      </div>
    </form>
  )
}

export default Form
