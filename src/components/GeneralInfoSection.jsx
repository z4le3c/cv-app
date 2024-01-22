import React, { useState } from "react"

function GeneralInfoSection({generalInfo, setGeneralInfo}) {
  const [editing, setEditing] = useState(true)

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    setEditing(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  return (
    <div className="general-info section" onClick={!editing ? handleEdit : undefined}>
      <h2>General Info</h2>
      {
        editing ? (
          <>
            <div className="input-container">
              <label htmlFor="name" className="input-label">Name:</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={generalInfo.name}
                onChange={handleChange}
                placeholder="fuil name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email" className="input-label">Email:</label>
              <input 
                type="text" 
                id="email"
                name="email"
                value={generalInfo.email}
                onChange={handleChange}
                placeholder="email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="phone" className="input-label">Phone:</label>
              <input 
                type="text" 
                id="phone"
                name="phone"
                value={generalInfo.phone}
                onChange={handleChange}
                placeholder="phone number"
              />
            </div>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <div>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
          </div>
        )
      }
    </div>
  )
}

export default GeneralInfoSection
