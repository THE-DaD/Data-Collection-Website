'use client'


import { Button } from '@/components/ui/button'

import firebaseapi from '../../firebase/firebaseapi';

export default function SignUp() {
    
    const  handleClick = async () => {
     await firebaseapi.signInWithGoogle();
   }



  
  return (
    <div>
        <Button onClick={handleClick}>
            Sign With Google
        </Button>
    </div>
  )
}

