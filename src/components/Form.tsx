import React from 'react'

function Form() {
  const handleChange = (e: any) => {}

  return (
    <form className="input-filed col s12">
      <input type="text" name="city" id="city" onChange={handleChange} />
    </form>
  )
}

export default Form
