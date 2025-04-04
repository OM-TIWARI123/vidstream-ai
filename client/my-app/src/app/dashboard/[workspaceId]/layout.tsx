import { onAuthenticateUser } from '@/actions/user'
import React from 'react'
import  {redirect} from 'next/navigation'
import { verifyAccessToWorkspace,getWorkspaceFolders,getAllUserVideos,getWorkSpaces } from '@/actions/workspace'
import { getNotifications } from '@/actions/user'
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import Sidebar from '@/components/global/sidebar'
import GlobalHeader from '@/components/global/global-header'

type Props={
    params:{ workspaceId : string}
    children:React.ReactNode
}


const Layout=async ({params:{workspaceId},children}:Props)=>{
     console.log("Layout rendering started", workspaceId);
     const auth=await onAuthenticateUser()
     console.log("Auth completed", !!auth.user);

     if(!auth.user?.workspace) redirect('/auth/sign-in')
     if(!auth.user.workspace.length) redirect('/auth/sign-in')
     const hasAccess=await verifyAccessToWorkspace(workspaceId)
    
     if(hasAccess.status!==200){
        redirect(`/dashboard/${auth.user?.workspace[0].id}`)
     }



     const query=new QueryClient()

    
     await query.prefetchQuery({
        queryKey: ['workspace-folders'],
        queryFn :()=> getWorkspaceFolders(workspaceId)
     })
  
     await query.prefetchQuery({
         queryKey: ['user-videos'],
         queryFn : ()=> getAllUserVideos(workspaceId)
     })
     await query.prefetchQuery({
         queryKey: ['user-workspaces'],
         queryFn : ()=> getWorkSpaces()
     })
     await query.prefetchQuery({
         queryKey: ['user-notifications'],
         queryFn : ()=> getNotifications()
     })


      
    
    return <HydrationBoundary state={dehydrate(query)}>
        <div className="flex h-screen w-screen">
            <Sidebar activeWorkspaceId={workspaceId} />
            <div className='w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden'>
                <GlobalHeader workspace={hasAccess?.data?.workspace}/>
                <div className="mt-4">{children}</div>
            </div>
            

        </div>
       
     </HydrationBoundary>
}

export default Layout