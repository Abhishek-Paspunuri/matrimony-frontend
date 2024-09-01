import Card from './Card'

interface personalDetailsProps {
    personalInformation: { [key: string]: any },
    educationAndProfessionInformation: { [key: string]: any }
    kundaliInformation?: { [key: string]: any };
}

const PersonalDetails = (props: personalDetailsProps) => {
    const { personalInformation, educationAndProfessionInformation, kundaliInformation } = props;
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[70%]'>
                <div className='w-full py-3 h-auto flex justify-between'>
                    <Card
                        title="Personal Information"
                        data={personalInformation}
                    />
                    <Card
                        title='Educational & Professional Information'
                        data={educationAndProfessionInformation}
                    />
                </div>
                <div className='w-[70%] py-3 flex justify-between'>
                    {
                        kundaliInformation && Object.keys(kundaliInformation).length > 0 &&
                        <Card
                            title='Kundali Information'
                            data={kundaliInformation}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
