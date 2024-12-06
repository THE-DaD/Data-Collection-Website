'use client'

import { Button } from '@/components/ui/button'
import firebaseapi from '../../firebase/FireBaseApi.js';
import './signup.css';



export default function SignUp() {
    
  const  handleClick = async () => {
   await firebaseapi.signInWithGoogle();
 }

   

  
  return (
    <div className="signup-page">
      <div className="background-text">
      <p> מצוינות <br/>
      &emsp;&emsp;הקשבה<br/>
      התקדמות<br/>
      &emsp;&emsp;סובלנות<br/>
      מנהיגות</p>

      </div>

      <h1>הכל<br/>מתחיל<br/>פה</h1>

      <div className="arrow"></div>

      <Button className="button" onClick={handleClick}>
        Sign With Google
      </Button>
    </div>
  )
}

