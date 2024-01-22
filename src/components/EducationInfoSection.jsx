import { useState } from "react"
function EducationInfoSection({ educationalInfo, setEducationalInfo }) {
  const [editing, setEditing] = useState(true)
  const [adding, setAdding] = useState(false)
  const [currEditingEdu, setCurrEditingEdu] = useState(-1)

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    setCurrEditingEdu(-1)
    setEditing(false)
  }

  const handleChange = (e) => {
    let { id, name, value } = e.target
    id = +id
    const newEduInfo = [...educationalInfo]
    const indexToUpdate = educationalInfo.findIndex((item) => {
      return item.id === id
    })
    newEduInfo[indexToUpdate][name] = value
    setEducationalInfo(newEduInfo)
  }

  const handleNewEducation = () => {}

  const handleSchoolEdit = (e) => {
    let { id } = e.target
    id = +id
    setCurrEditingEdu(id)
  }

  return (
    <div
      className="edu-exp section"
      onClick={!editing ? handleEdit : undefined}
    >
      <h2>Education</h2>
      {editing ? (
        <>
          {educationalInfo.map((education) => {
            return currEditingEdu == education.id ? (
              <div className="input-container" key={education.id}>
                <label htmlFor={education.id}>School: </label>
                <input
                  type="text"
                  id={education.id}
                  name="school"
                  value={education.school}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div id={education.id} onClick={handleSchoolEdit} key={education.id}>
                {education.school}
              </div>
            )
          })}
          <button onClick={handleNewEducation}>New</button>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <div>
          {educationalInfo.map((education) => {
            return (
              <p key={education.id}>
                {education.school}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default EducationInfoSection
