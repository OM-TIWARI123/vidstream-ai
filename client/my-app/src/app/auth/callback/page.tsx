import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'


const AuthCallbackPage=async ()=>{

    const auth=await onAuthenticateUser()
    
    

    if(auth.status===200 || auth.status===201){
     // Check if user has workspaces before redirecting
     return redirect(`/dashboard/${auth.user?.workspace[0].id}`)
            // If no workspaces, redirect to create workspace
           
    }
    if(auth.status === 400 || auth.status === 500 || auth.status===403){
       redirect('/auth/sign-in')
        
        
    }

    
}

export default AuthCallbackPage