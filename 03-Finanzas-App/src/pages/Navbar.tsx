import { useAuth } from "@/contexts/authContext";
import { doLogout } from "@/services/login.service";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LayoutDashboardIcon, LogOut, MenuIcon, TrendingDown, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";
// import { Link } from "lucide-react";
import { Link, useNavigate } from "react-router";

function NavBar() {

    const navigate = useNavigate()
    const [ismobile, setIsmobile] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const { currentUser } = useAuth()

    useEffect(() => {

        detectSize()
        const handleResize = () => {
            detectSize()
        }
        addEventListener('resize', handleResize)

        return () => {
            removeEventListener('resize', handleResize)
        }
    }, [])


    const detectSize = () => {
        if (window.innerWidth < 640) {
            setIsmobile(true)
            // setShowMenu(true)
        } else {
            setIsmobile(false)
            // setShowMenu(false)
        }
    }

    const toogleMenu = () => {
        // e.stopPropagation()
        // console.log(e.target.parentNode.id).
        setShowMenu(true)
        setIsHidden(false)

    }

    const closeMenu = () => {
        setShowMenu(false)
        setIsHidden(false)
    }

    const logout = async () => {
        console.log('Logout')
        try {
            await doLogout().then(() => {
                navigate('/login')
                // sessionStorage.removeItem('user')
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <nav className={`relative flex justify-between items-center p-8 bg-black w-auto z-10`}>
            {
                ismobile ?
                    <button onClick={toogleMenu} className={`flex items-center space-x-4 ${ismobile ? 'block' : 'hidden'}`}>
                        <MenuIcon color="white" />
                    </button> :
                    <span>
                        <Link to={'/'} className="text-white text-xl font-bold">
                            Finance App
                        </Link>
                    </span>
            }

            {
                isHidden ?
                    null :
                    <div className={`${showMenu ? 'fixed inset-0 z-30 flex items-center justify-center bg-gray-900 bg-opacity-50' : 'bg-opacity-0'}`}>

                        <div className={`fixed ${showMenu ? 'left-0' : '-left-[230px]'} top-0 flex flex-col justify-center items-center 
                            bg-black w-auto p-10 min-h-screen z-50 
                            ${showMenu ? 'animate-slide-menu' : 'animate-slide-menu-reverse'}
`}>
                            <button onClick={closeMenu} className="absolute right-5 top-8 z-10">
                                <X color="white" />
                            </button>
                            <span className="flex flex-grow items-center justify-center text-white">
                                <ul className="flex flex-col items-center justify-center gap-y-14 text-white">
                                    <li>
                                        <Link onClick={closeMenu} className="flex flex-row justify-evenly items-center space-x-2 w-36 p-2 hover:bg-gray-500 rounded-xl animate-slide-menu-reverse" to={'/dashboard'}>
                                            <LayoutDashboardIcon />
                                            <p className="">Dashboard</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeMenu} className="flex flex-row justify-evenly items-center space-x-2 w-36 p-2 hover:bg-gray-500 rounded-xl" to={'/incomes'}>
                                            <TrendingUp />
                                            <p>Incomes</p>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeMenu} className="flex flex-row justify-evenly items-center space-x-2 w-36 p-2 hover:bg-gray-500 rounded-xl" to={'/expenses'}>
                                            <TrendingDown />
                                            <p>Expenses</p>

                                        </Link>
                                    </li>

                                </ul>
                            </span>


                        </div>
                    </div>


            }

            <span >
                <ul className={`${ismobile ? 'bg-black hidden' : 'flex flex-row'}  items-center justify-center gap-x-10 text-white`}>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/incomes'}>Incomes</Link>
                    </li>
                    <li>
                        <Link to={'/expenses'}>Expenses</Link>
                    </li>
                </ul>
            </span>
            <span>

                <ul className="flex flex-row items-center justify-center space-x-9 text-white">
                    {
                        currentUser.photoURL ?
                            <Avatar>
                                <AvatarImage src={
                                    currentUser.photoURL
                                } alt="Foto" className="w-12 h-12 rounded-full" />
                                <AvatarFallback>Perfil</AvatarFallback>
                            </Avatar>
                            :
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" className="w-12 h-12 rounded-full" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                    }
                    <li className="flex-wrap">
                        <button className="flex space-x-2" onClick={logout}>
                            <span>
                                <LogOut />
                            </span>
                            <span>
                                Logout
                            </span>
                        </button>
                    </li>
                </ul>

            </span>



        </nav >
    )
}

export default NavBar;