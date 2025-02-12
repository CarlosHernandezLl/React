import { createContext, useContext, useRef, useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import { NavBar } from './NavBar'
import useFetch from '../hooks/useFetch'
import { CartContext } from '../context/CartContext'
import { InfoProduct } from './InfoProduct'
import { FilterContext, FilterProvider } from '../context/FilterContext'


function HomePage() {

    const { filter, setFilter, resetFilter } = useContext(FilterContext)
    const { data } = useFetch()
    const { cartTotal, incrementCartTotal } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState()
    const [newData, setNewData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    console.log('se renderiza')

    useEffect(() => {
        filterData(filter)

        return () => {
            // resetFilter()
        }

    }, [filter, data])


    const filterData = (category) => {

        if (category === '') {
            setNewData(data)
            console.log(data)

        }
        else {
            const filterData = data.filter((item) => item.category.id === category)
            console.log(filterData)
            setNewData(filterData)
        }

    }


    const search = (e) => {
        e.preventDefault()
        const search = e.target.previousElementSibling.value
        setSearchValue(search)
        
        const filterData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        if (filterData.length === 0) {
            alert('No se encontraron resultados')
            setNewData(data)
            return
        }
        setNewData(filterData)

    }

    const mostrarmodal = (item) => {
        console.log(item)
        setShowModal(true)
    }

    return (
        <>
            <div className="App">
                <form className='flex items-center justify-center space-x-1 mt-10'>
                    <input type='text' name='search' placeholder='Search' style={{
                        outline: 'none',
                        border: '1px solid #000',
                        padding: '10px',
                        width: '50%',
                        borderRadius: '5px',
                        color: '#000'
                    }} />
                    <button onClick={(e)=> search(e)} className='bg-blue-500 text-white p-2 w-auto rounded-md'>Search
                    </button>
                </form>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-10'>
                    {
                        newData.slice(1, 50).map((item) => {
                            return (
                                <div key={item.id} className='relative flex flex-col
                  justify-center items-center gap-2 p-4 h-auto border'>
                                    <img onClick={() => {
                                        mostrarmodal(item)
                                        setItem(item)
                                    }} className='w-52 h-52 rounded-2xl' src={item.images} alt={item.title} />
                                    <h2 className='text-amber-950 pt-4 '>{item.title}</h2>
                                    <h2 className='text-amber-950'>${item.price}</h2>
                                    <button onClick={() => { incrementCartTotal(item) }} className='bg-blue-500 hover:scale-110 text-white p-4 w-auto rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                            <circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle>
                                            <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
                                            <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                {
                    showModal &&
                    <div className='fixed top-0 right-0 w-[400px] h-screen bg-opacity-50 flex flex-col justify-center items-center z-50 pt-20 px-4 bg-amber-50'>
                        <div className='w-full h-full'>
                            <InfoProduct key={item.id} {...item} />
                        </div>
                        <button onClick={() => {
                            setShowModal(false)
                        }} className='bg-red-500 text-white mb-4 p-2 w-1/2 rounded-md'>Close
                        </button>
                    </div>
                }
            </div>

        </>
    )
}

export default HomePage
