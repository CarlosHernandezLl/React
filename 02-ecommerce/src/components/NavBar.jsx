import { useContext, useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FilterContext, FilterProvider } from '../context/FilterContext'
import { use } from 'react'


export function NavBar() {

    const { getTotalProducts } = useContext(CartContext)
    const { filter, handleFilter, resetFilter } = useContext(FilterContext)
    const [ismobile, setIsmobile] = useState(false)
    const [close, setClose] = useState(true)

    const handleMobile = () => {

        window.innerWidth < 768 ? setIsmobile(true) : setIsmobile(false)

    }

    useEffect(() => {
        handleMobile()
        window.addEventListener('resize', handleMobile)
        return () => {
            window.removeEventListener('resize', handleMobile)
        }
    }, [])


    return (

        <>
            <nav className='fixed z-100 bg-linear-to-r from-sky-700 via-blue-600 to-indigo-900 to-90% p-6 w-full flex items-center justify-evenly' >
                <Link to={'/'}>
                    <h1 className='text-white text-xl mr-4'>ShopStore</h1>
                </Link>

                {
                    ismobile ?
                        null
                        :
                        <ul className='flex-col items-center space-x-6'>
                            <Link to='/all' onClick={() => { resetFilter() }}>
                                All
                            </Link>
                            <Link to='/electronics' onClick={() => {
                                handleFilter(2)
                            }}>
                                Electronics
                            </Link>
                            <Link to='/furniture' onClick={() => { handleFilter(3) }}>
                                Furniture
                            </Link>
                            <Link to='/shoes' onClick={() => {
                                handleFilter(4)
                            }}>
                                Shoes
                            </Link>
                            <Link to='/miscellaniues' onClick={() => { handleFilter(5) }}>
                                Miscellaneous
                            </Link>
                        </ul>
                }

                <Link to='/cart' className='text-white'>
                    <div className='block relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='#fff'><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                        <span
                            className='absolute -top-2 -right-2 bg-white text-black font-bold rounded-full w-auto p-1 h-5 flex items-center justify-center'>
                            {getTotalProducts()}
                        </span>
                    </div>
                </Link>

                {
                    close ?

                        <span className={`text-white cursor-pointer absolute right-4 ${ismobile ? 'flex' : 'hidden'}`} onClick={() => setClose(!close)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='#fff'><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path></svg>
                        </span>

                        :
                        <>
                            <span className={`text-white cursor-pointer absolute right-4 ${ismobile ? 'flex' : 'hidden'}`} onClick={() => setClose(!close)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </span>
                            <div className={`absolute ${ismobile ? 'flex' : 'hidden'} flex-col w-auto justify-evenly h-[300px] px-10 py-5 bg-white text-black right-0 top-20`}>


                                <Link to='/all' onClick={() => { resetFilter() }}>
                                    All
                                </Link>
                                <Link to='/electronics' onClick={() => {
                                    handleFilter(2)
                                }}>
                                    Electronics
                                </Link>
                                <Link to='/furniture' onClick={() => { handleFilter(3) }}>
                                    Furniture
                                </Link>
                                <Link to='/shoes' onClick={() => {
                                    handleFilter(4)
                                }}>
                                    Shoes
                                </Link>
                                <Link to='/miscellaniues' onClick={() => { handleFilter(5) }}>
                                    Miscellaneous
                                </Link>


                            </div>
                        </>

                }

            </nav >
            {
                ismobile ?

                    <div className={`absolute items-center justify-center right-4 top-10% ` + (ismobile ? 'flex' : 'hidden')}>
                        <ul className={` flex-col items-center space-x-6 `}>

                            <Link to='/' onClick={() => { resetFilter() }}>
                                All
                            </Link>
                            <Link to='/electronics' onClick={() => {
                                handleFilter(2)
                            }}>
                                Electronics
                            </Link>
                            <Link to='/furniture' onClick={() => { handleFilter(3) }}>
                                Furniture
                            </Link>
                            <Link to='/shoes' onClick={() => {
                                handleFilter(4)
                            }}>
                                Shoes
                            </Link>
                            <Link to='/miscellaniues' onClick={() => { handleFilter(5) }}>
                                Miscellaneous
                            </Link>

                        </ul>
                    </div>
                    : null
            }
        </>


    )
}