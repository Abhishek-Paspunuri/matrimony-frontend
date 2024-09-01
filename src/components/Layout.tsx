import Home from './Home'
const Layout = () => {
    return (
        <div>
            <div className='w-full h-[25vh] bg-purple-300'>
                <p className='text-2xl text-purple-900 font-bold pt-4 pl-5 sm:pl-[9rem] md:pl-[16rem] italic'>
                    My Matrimony
                </p>
            </div>
            <div className='w-full bg-gray-100'></div>
            <div className='w-full px-3 md:px-12 absolute top-20'>
                <Home />
            </div>
        </div>
    )
}

export default Layout
