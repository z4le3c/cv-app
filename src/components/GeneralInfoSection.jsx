import React, { useState } from "react"

function Input({ id, labelText, disabled, onChange, value }) {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {labelText}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={labelText}
      />
    </div>
  )
}

function GeneralInfoSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isEditing, setIsEditing] = useState(true)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Submitted:", { name, email, phone })
    setIsEditing(false)
  }

  return (
    <div className="general-info edit-card">
      <h1>General Info</h1>
      <Input
        id="name"
        labelText="Name"
        disabled={!isEditing}
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></Input>
      <Input
        id="email"
        labelText="Email"
        disabled={!isEditing}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></Input>
      <Input
        id="phone"
        labelText="Phone Number"
        disabled={!isEditing}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      ></Input>

      {isEditing ? (
        <button type="button" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      )}
    </div>
  )
}

export default GeneralInfoSection
