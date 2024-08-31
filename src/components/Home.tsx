import { useEffect, useState } from 'react'
import Corousel from './Corousel'
import PersonalDetails from './PersonalDetails'
import FooterButtons from './FooterButtons'
import { BeatLoader } from 'react-spinners'

const Home = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
    const [profileData, setProfileData] = useState([])
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

    return (
        <>
            {
                profileData.length === 0 &&
                <div className='pb-4'>
                    <Corousel images={profileData[currentProfileIndex]['images']} />
                    <PersonalDetails
                        personalInformation={profileData[currentProfileIndex]['Personal Information']}
                        educationAndProfessionInformation={profileData[currentProfileIndex]['Educational & Professional Information']}
                        kundaliInformation={
                            'Kundali Information' in profileData[currentProfileIndex]
                                ? (profileData[currentProfileIndex]['Kundali Information'] as { [key: string]: any })
                                : undefined
                        }
                    />
                    <FooterButtons
                        profileCount={profileData.length}
                        currentProfileIndex={currentProfileIndex}
                        setCurrentProfileIndex={setCurrentProfileIndex}
                    />
                </div>
            }
        </>
    )
}

export default Home
