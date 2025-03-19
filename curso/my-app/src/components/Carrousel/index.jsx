import '../../App.css'
import Slider from 'react-slick'

function Carrousel({children}){

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        variableHeight: true,
        slidesToScroll: 1,
      };
    
   return(
        <div >
            <Slider {...settings} className=' w-[80vw] h-[200px] flex justify-center gap-1'>
                {children}
            </Slider>
        </div>
   )
}

export default Carrousel