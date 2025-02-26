import '../../App.css';

function Container({children}){
    return(
        <section className='w-full h-full bg-black py-4 text-white'>
            {children}
        </section>

    );
}

export default Container;