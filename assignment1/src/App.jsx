import { useState } from 'react'
import data from './assignmentData.json'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'

import './App.css'

function App() {

  const [profileData, setProfileData] = useState(data)
  
  console.log(data[0].data);
  return (  

      <div className='App container'>
      <ProfileInfo profileData={profileData} />
    </div>
  

    
  )
}

export default App

