'use client'
import { getAllUserVideos } from '@/actions/workspace'
import VideoRecorderDuotone from '@/components/icons/video-recorder-duotone'
import { userQueryData } from '@/hooks/userQueryData'
import { cn } from '@/lib/utils'
import { VideosProps } from '@/types/index.type'
import VideoCard from './video-card'
import React from 'react'

type Props={
    folderId: string
    videosKey: string
    workspaceId: string
}

const Videos=({folderId,videosKey,workspaceId}:Props)=>{

    const idToUse =folderId || workspaceId

    const {data:videoData}=userQueryData([videosKey],()=>getAllUserVideos(idToUse))
    const {status:videosStatus,data:videos}=videoData as VideosProps


    return( 
    <div className='flex flex-col gap-4 mt-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <VideoRecorderDuotone/>
                <h2 className='text-[#BdBdBd] text-xl'> Videos</h2>

            </div>
        </div>
        <section className={cn(videosStatus!==200 ?'p-5':'grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5')}>
            {videosStatus===200 ? (
                videos.map((video) => <VideoCard key={video.id} workspaceId={workspaceId} {...video} />)
            ) : (
                <p className='text-[#BDBDBD]'>No videos in workspace</p>
            )}
            
        </section>
    </div>
    )
}

export default Videos