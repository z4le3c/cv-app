import { useState } from "react"
import GeneralInfoSection from "./components/GeneralInfoSection"
import EducationInfoSection from "./components/EducationInfoSection"
import ExperienceInfoSection from "./components/ExperienceInfoSection"
import CVOutput from "./components/CVOutput"

import "./App.css"

function App() {
  return (
    <>
      <div className="edit-container">
        <GeneralInfoSection ></GeneralInfoSection >
        <EducationInfoSection></EducationInfoSection>
        <ExperienceInfoSection></ExperienceInfoSection>
      </div>
      <CVOutput></CVOutput>
    </>
  )
}

export default App
