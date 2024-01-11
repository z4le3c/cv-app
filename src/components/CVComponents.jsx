function GeneralInformation() {
  return (
    <div className="general-info edit-card">
      <h1>General Info</h1>
      <div className="input-container">
        <label htmlFor="full-name" className="input-label">
          Full Name
        </label>
        <input id="full-name" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input id="email" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="number" className="input-label">
          Phone Number
        </label>
        <input id="number" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="address" className="input-label">
          Address
        </label>
        <input id="address" type="text" />
      </div>
    </div>
  )
}

function EducationalExperience() {
  return (
    <div className="edu-exp edit-card">
      <h1>Education</h1>
    </div>
  )
}

function PracticalExperience() {
  return (
    <div className="pract-exp edit-card">
      <h1>Experience</h1>
    </div>
  )
}

function CVOutput() {
  return (
    <div className="cv-output">
      <h1>CV Output</h1>
    </div>
  )
}

export {
  GeneralInformation,
  EducationalExperience,
  PracticalExperience,
  CVOutput,
}
