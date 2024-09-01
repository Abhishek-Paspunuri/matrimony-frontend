import { useCallback, useEffect, useMemo, useState } from 'react'
import Corousel from './Corousel'
import PersonalDetails from './PersonalDetails'
import FooterButtons from './FooterButtons'
import { BeatLoader } from 'react-spinners'

interface UserProfile {
    "Personal Information": any;
    "Educational & Professional Information": any;
    "Kundali Information"?: { [key: string]: any };
    images: string[];
    id: string; 
    Name: string;
}

const Home = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
    const [profileData, setProfileData] = useState<UserProfile[]>()
    const [isLoading, setIsLoading] = useState(true)

    const toPascalCase = useCallback((str: string): string => {
        return str
            .split(/[^a-zA-Z0-9]/) 
            .filter(Boolean) 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
            .join(''); 
    },[]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentProfileIndex]);

    useEffect(() => {
        fetch('https://matrimony-y2hn.onrender.com/profiles')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setProfileData(data)
            })
    }, [])

    if (isLoading) {
        return <div className='fixed top-[50%] left-[45%]'>
            <BeatLoader
                color={'rgb(96 78 181)'}
                size={12}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (!profileData || profileData.length === 0) {
        return <h1>No profiles available</h1>;
    }

    const currentProfile = profileData[currentProfileIndex];

    return (
        <div className='pb-4'>
            <div className=' md:flex md:justify-center '>
                <div className='flex justify-between md:w-[70%]'>
                    <p className='p-1 rounded px-2 bg-purple-500 text-white font-semibold'>
                        Name : {toPascalCase(currentProfile.Name)}
                    </p>
                    <p className='p-1 rounded px-2 bg-purple-500 text-white font-semibold'>
                        Id : {currentProfile.id}
                    </p>
                </div>
            </div>
            <Corousel images={currentProfile.images} />
            <PersonalDetails
                personalInformation={currentProfile["Personal Information"]}
                educationAndProfessionInformation={currentProfile["Educational & Professional Information"]}
                kundaliInformation={currentProfile["Kundali Information"]}
            />
            <FooterButtons
                profileCount={profileData.length}
                currentProfileIndex={currentProfileIndex}
                setCurrentProfileIndex={setCurrentProfileIndex}
            />
        </div>
    );
}

export default Home
