import FormGenerator from "@/components/global/form-generator";
import { useEditVideo } from "@/hooks/useEditVideo";

type Props={
    videoId:string;
    title:string;
    description:string;
}


const EditVideoForm=({description,title,videoId}:Props)=>{
    const {errors,isPending,onFormSubmit,register}=useEditVideo(videoId,title,description)
    
    console.log("EditVideoForm rendering with:", { title, description, videoId });
    
    return (
        <form onSubmit={onFormSubmit} className='flex flex-col gap-y-5'>
            
            <FormGenerator
                register={register}
                errors={errors}
                name='title'
                inputType='input'
                type='text'
                placeholder={'Video Title..'}
                label="Title"
            />
            <FormGenerator
                register={register}
                label="Description"
                errors={errors}
                name="description"
                inputType="textarea"
                type="text"
                lines={5}
                placeholder={'Video  Description..'}
            />

            
            
        </form>
    )
}

export default EditVideoForm