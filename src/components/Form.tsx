import React from 'react'

function Form() {
  const handleChange = (e: any) => {}

  return (
    <form className="input-filed col s12">
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select name="city" id="" onChange={handleChange}>
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
        <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Search Weather" />
      </div>
    </form>
  )
}

export default Form
