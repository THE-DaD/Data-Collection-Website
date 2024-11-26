'use client'


import { Button } from '@/components/ui/button'

import Firebase from '../../firebase/firebaseapi'

export default function SignUp() {
    
    const  handleClick = async () => {
     await Firebase.signInWithGoogle();
   }



  
  return (
    <div>
        <Button onClick={handleClick}>
            Sign With Google
        </Button>
    </div>
  )
}

