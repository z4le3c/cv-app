import { useState } from "react"
import {
  GeneralInformation,
  EducationalExperience,
  PracticalExperience,
  CVOutput
} from "./components/CVComponents"
import "./App.css"

function App() {
  return (
    <>
      <div className="edit-container">
        <GeneralInformation></GeneralInformation>
        <EducationalExperience></EducationalExperience>
        <PracticalExperience></PracticalExperience>
      </div>
      <CVOutput></CVOutput>
    </>
  )
}

export default App
