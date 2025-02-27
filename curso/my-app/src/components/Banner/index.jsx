import '../../App.css';


function Banner({image}){
    return(
        <div 
        className="w-full h-96 pt-20 bg-cover" style={{ backgroundImage: `url('/images/banner-${image}.png')`}}>
        

        </div> 
    );
}

export default Banner;