import Home from './Home'
const Layout = () => {
    return (
        <div>
            <div className='w-full h-[25vh] bg-purple-300'></div>
            <div className='w-full bg-gray-100'></div>
            <div className='w-full px-12 absolute top-[100px]'>
                <Home />
            </div>
        </div>
    )
}

export default Layout
