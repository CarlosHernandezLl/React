import ecommerce from '../assets/Ecommerce.svg'
import shop from '../assets/shop.svg'

function Presentation() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center text-black
        bg-linear-to-r from-sky-700 via-blue-600 to-indigo-900 to-90%
         ">
            <div className="absolute w-auto h-auto top-1/2 left-1/2 -translate-1/2 flex items-center justify-center">
                <img src={ecommerce} alt="ecommerce" className="min-w-80 min-h-80" />
            </div>

            <h1 className="text-4xl md:text-5xl text-amber-200 font-bold text-clip z-20 pb-80">Welcome to our store!</h1>
            <p className="text-2xl md:text-4xl text-yellow-300 text-clip z-20">Developed by Carlos Hernandez</p>

        </main>
    );
}

export default Presentation;