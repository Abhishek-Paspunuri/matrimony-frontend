import React from "react"

interface FooterProps {
    profileCount: number,
    setCurrentProfileIndex: React.Dispatch<React.SetStateAction<number>>,
    currentProfileIndex: number
}

const FooterButtons = (props: FooterProps) => {
    const { profileCount, setCurrentProfileIndex, currentProfileIndex } = props;
    const handlePageAction = (action: string) => {
        if (action.toLocaleLowerCase() === 'next') {
            currentProfileIndex === profileCount - 1 ? setCurrentProfileIndex(0) : setCurrentProfileIndex(prev => prev + 1);
        }
        else {
            currentProfileIndex > 0 ? setCurrentProfileIndex(prev => prev - 1) : setCurrentProfileIndex(0);
        }
    }
    return (
        <div className='flex justify-center '>
            <div className='w-[70%] h-[2rem] flex justify-end'>
                <button 
                    className='bg-purple-800 text-white p-1 w-[5rem] rounded-lg mx-2 hover:bg-purple-500 disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed' 
                    onClick={() => handlePageAction('prev')} 
                    disabled={currentProfileIndex === 0}
                >
                    Prev
                </button>
                <button 
                    className='bg-purple-800 text-white p-1 w-[5rem] rounded-lg mx-2 hover:bg-purple-500 disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed' 
                    onClick={() => handlePageAction('next')}
                    disabled={currentProfileIndex === profileCount - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default FooterButtons
