import '../../App.css';
import videos from '../../json/videos.json'

const categories=[
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ] 
  
function filterCategory(id){
    return videos.filter((video)=>{
      return video.category === categories[id]
    })
  }

function Category({category, children}){
    return(
        <section className=' flex flex-col min-w-[1200px] min-h-[280px] mx-auto'>
            <h2 className=' py-4 flex justify-center font-bold text-2xl mb-4'> {category} </h2>

            <div className='flex gap-1 float-start items-center m-4 p-4 w-[100%] h-[150px]'>
                {children}
            </div>
        </section>
    )
}

export { categories, filterCategory };
export default Category;