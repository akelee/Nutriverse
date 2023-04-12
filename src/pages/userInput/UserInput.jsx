import React, { useState }  from 'react'
import './userInput.css'
import './userInputList'



const UserInput = () => {

  const [typeformData, setTypeformData] = useState(null)
  
  const [query, setQuery] = useState("")

  const APP_KEY =  ""

  const url = `
  https://api.typeform.com/forms/MYesPtMj/responses&apiKey=***`

  const handleSubmit = e => {
    e.preventDefault();
  }

  function getTypeformData() {
    fetch(
      `https://api.typeform.com/forms/MYesPtMj/responses&apiKey=***`
    )
    .then((response) => response.json())
    .then((data) => {
      setTypeformData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    })
  }

  return (
    <div className="nutriverse__userInput-container">
      <div className="nutriverse__typeform">
        <iframe src="https://alex821523.typeform.com/to/MYesPtMj" width="1000px" height="500px" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default UserInput 
