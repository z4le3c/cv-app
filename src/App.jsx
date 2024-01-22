import { useState } from "react"
import GeneralInfoSection from "./components/GeneralInfoSection"
import EducationInfoSection from "./components/EducationInfoSection"
import ExperienceInfoSection from "./components/ExperienceInfoSection"

import "./App.css"

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [educationalInfo, setEducationalInfo] = useState([
    {school:'School1', id:1},
    {school:'School2', id:2},
  ])
  const [practicalInfo, setPracticalInfo] = useState([])

  return (
    <>
      <div className="cv-container">
        <GeneralInfoSection
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        ></GeneralInfoSection>
        <EducationInfoSection
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
        ></EducationInfoSection>
        <ExperienceInfoSection
          practicalInfo={practicalInfo}
          setPracticalInfo={setPracticalInfo}
        ></ExperienceInfoSection>
      </div>
    </>
  )
}

export default App
