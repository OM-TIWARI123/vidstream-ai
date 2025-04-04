'use client'
import { getWorkSpaces } from '@/actions/workspace';
import { userQueryData } from '@/hooks/userQueryData';
import React from 'react';
import Modal from '../global/modal';
import { Button } from '../ui/button';
import FolderPlusDuotine from '../icons/folder-plus-duotone';
import WorkspaceForm from '../forms/workspace-form';

type Props={}

const CreateWorkspace=(props:Props)=>{
    const {data}= userQueryData(['user-workspaces'],getWorkSpaces)

    const {data:plan}=data as{
        status:number
        data:{
            subscription :{
                plan :'PRO'|'FREE'
            } | null
        }
    }

    if(plan.subscription?.plan==='FREE'){
        return <></>
    }
    if(plan.subscription?.plan==='PRO')
    
        return (
            <Modal
            title="Create a Workspace"
            description="This action cannot be undone, THis will permanently delete Your account and remove your data from our servers."
            trigger={
                <Button className='bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl'>
                   <FolderPlusDuotine/> 
                   Create a workspace
                </Button>
            }>
                <WorkspaceForm/>

            </Modal>
        )
    

    
}

export default CreateWorkspace