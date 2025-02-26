import '../../App.css';
import videos from '../../json/videos.json'

export const categories=[
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ]
  
export function filterCategory(id){
    return videos.filter((video)=>{
      return video.category === categories[id]
    })
  }

function Category({category, children}){
    return(
        <section className='my-4'>
            <h2 className='flex justify-center font-bold text-2xl'> {category} </h2>

            <div className='flex gap-1 flex-wrap justify-center'>
                {children}
            </div>
        </section>
    )
}

export default Category;