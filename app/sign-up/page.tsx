'use client'

import { Button } from '@/components/ui/button'
import firebaseapi from '../../firebase/firebaseapi';
import './signup.css';
import { ArrowRight} from 'lucide-react';
import Link from 'next/link'



export default function SignUp() {
    
  const  handleClick = async () => {
   await firebaseapi.signInWithGoogle();
 }

   

  
  return (
    <div style={{width: "100%", height: "100%", overflow: "hidden"}}>
      <div style={{position: "absolute", top: "0%", left: "1%"}}>
      <header className="">
          <div className="">
            <a 
              href="/" 
            >
              חזרה לדף הבית
              <ArrowRight className="w-4 h-4 mr-2" />
            </a>
          </div>
        </header>
      </div>
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
    </div>
  )
}

