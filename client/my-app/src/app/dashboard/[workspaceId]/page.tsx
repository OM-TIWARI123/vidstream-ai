
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import Folders from '@/components/global/folders'

import React from 'react'
import CreateWorkspace from '@/components/create-workspace' 
import CreateFolders from '@/components/global/create-folders'
import { userQueryData } from '@/hooks/userQueryData'
import { getAllUserVideos } from '@/actions/workspace'
import { VideosProps } from '@/types/index.type'
import Videos from '@/components/global/videos'
type Props = {
  params: { workspaceId: string }
}

const Page = async ({ params: { workspaceId } }: Props) => {
  const query = new QueryClient()

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div>
        <Tabs
          defaultValue="videos"
          className="mt-6"
        >
          <div className="flex w-full justify-between items-center">
            <TabsList className="bg-transparent gap-2 pl-0">
              <TabsTrigger
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
                value="videos"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="archive"
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              >
                Archive
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-x-3">
              <CreateWorkspace/>
              <CreateFolders workspaceId={workspaceId}/>
            </div>
          </div>
          <section className="py-9">
            <TabsContent value="videos">
             <Folders workspaceId={workspaceId}/>
             <Videos
              workspaceId={workspaceId}
              videosKey='user-videos'
            />
            </TabsContent>
          </section>
        </Tabs>
      </div>
    </HydrationBoundary>
  )
}

export default Page
