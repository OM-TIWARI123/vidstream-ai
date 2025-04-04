import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import Loader from '../loader'
import VideoRecorderDuotone from '@/components/icons/video-recorder-duotone'
import { FileDuoToneBlack } from '@/components/icons'
import { DownloadIcon } from 'lucide-react'


type Props={
    plan:"PRO" | "FREE"
    trial :boolean
    videoId:string
}

const AiTools=({plan,trial,videoId}:Props)=>{

    return( 
    <TabsContent 
      value="Ai tools">
     <div className='flex items-center'>
      
        <div className='w-8/12'>
          <h2 className='text-3xl font-bold'>Ai Tools</h2>
          <p className="text-[#BDBDBD]">
            Taking your video to the next <br/> step with power of AI!
          </p>
        </div>
        <div className='flex items-center justify-between gap-4'>
         <Button className=' mt-2 text-sm'>
             <Loader state={false} color='#000'>
                 Try now
            </Loader>
        </Button>

        <Button className=' mt-2 text-sm ' variant={'secondary'}>
             <Loader state={false} color='#000'>
                 Pay Now
            </Loader>
        </Button>
        <Button className=' mt-2 text-sm'>
             <Loader state={false} color='#000'>
                 Generate Now
            </Loader>
        </Button>

      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center text-center text-[#BDBDBD] gap-y2 text-sm'>
            <VideoRecorderDuotone width="36" height="36"/>
            Generate Video 
        </div>
        <div className='flex flex-col items-center text-center text-[#BDBDBD]'>
            <FileDuoToneBlack
            width="36"
            height="36"/>
            Create and Read VIdeo <br/> Transcripts

        </div>
        <div className='flex flex-col items-center text-center text-[#BDBDBD]'>
            <DownloadIcon
            size={36}
            className='text-[#565656]'/>
            Download Video <br/> FIle

        </div>
      </div>
   
    </div>

    </TabsContent>
 )
}

export default AiTools