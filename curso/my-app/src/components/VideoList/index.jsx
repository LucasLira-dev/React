import '../../App.css';
import Card from '../Card';

function VideoList({videos, emptyHeading}) {

  const count= videos.length;
  let heading= emptyHeading;
    if(count>0){
        const noun = count>1 ? 'videos' : 'video';
        heading= `${count} ${noun}`;
    }


  return (
    <>
        <h2 className='text-center'> {heading} </h2>
        <section className='flex justify-center flex-wrap gap-[5px] '>
            {videos.map((video)=>(
                <Card id={video.id} key={video.id}/>
            ))}
        </section>
    </>
   
  );
}

export default VideoList;