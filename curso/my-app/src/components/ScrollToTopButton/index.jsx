import '../../App.css'

function ScrollToTopButton() {
    const handleClick=()=>{
        window.scrollTo({
            top:0, 
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={handleClick} className="fixed bottom-4 right-4 p-2 bg-red-500 text-white rounded-full z-50 cursor-pointer">
            &#9650;
        </button>
    )
}

export default ScrollToTopButton