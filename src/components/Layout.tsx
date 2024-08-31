import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <div className='w-full h-[25vh] bg-purple-300'></div>
            <div className='w-full bg-gray-100'></div>
            <div className='w-full px-12 absolute top-[100px] min-h-[10rem]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
