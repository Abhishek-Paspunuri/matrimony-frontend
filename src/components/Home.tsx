import { useEffect, useState } from 'react'
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
}

const Home = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
    const [profileData, setProfileData] = useState<UserProfile[]>()
    const [isLoading, setIsLoading] = useState(true)

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

   if (isLoading) {
        return <BeatLoader />;
    }

    if (!profileData || profileData.length === 0) {
        return <h1>No profiles available</h1>;
    }

    const currentProfile = profileData[currentProfileIndex];

    return (
        <div className='pb-4'>
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
