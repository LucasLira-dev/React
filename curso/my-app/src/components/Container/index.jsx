import '../../App.css';

function Container({children}){
    return(
        <section className='w-full min-h-[100vh] bg-black pb-[1.5rem] text-white overflow-hidden '>
            {children}
        </section>

    );
}

export default Container;