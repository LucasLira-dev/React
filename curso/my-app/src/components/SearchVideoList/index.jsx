import { useEffect, useState } from 'react'
import '../../App.css'
import VideoList from '../../components/VideoList'
import Loader from '../Loader'

function filterVideos(videos, searchText) {
  return videos.filter((video) => {
    return video.category.includes(searchText) || video.title.includes(searchText)
  })
}


function SearchVideoList({videos}) {

  const [searchText, setSearchText] = useState('')
  const foundVideos = filterVideos(videos, searchText)

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 500)
  }, [])

  return (
    <section className='min-w-[280px] max-w-[1500px] mx-auto flex justify-center flex-col'>
        <input 
            type="search"
            placeholder="Buscar..."
            className='w-[320px] h-10 p-[15px 10px] my-[0.5rem] m-auto pl-2 b-[0] outline-none rounded-md text-[12px]'
            value={searchText}
            onChange={event=>setSearchText(event.target.value)}
        />

        { loading ? <Loader /> :
          <VideoList 
              videos={foundVideos}
              emptyHeading={`Sem videos sobre "${searchText}"`}
           />
    }
    </section>
   
  )
}

export default SearchVideoList