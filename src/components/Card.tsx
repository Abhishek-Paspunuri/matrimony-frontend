interface CardProps {
    title: string,
    data: { [key: string]: string }
}

const Card = (props: CardProps) => {
    const { title, data } = props;
    return (
        <div className="pb-3 md:w-[48%]">
            <div className='border bg-purple-500 rounded-lg shadow-md text-white'>
                <div className='p-2'>
                    <p>{title}</p>
                    <div className="bg-white p-2 my-2 mx-2 text-black rounded-md">
                        {
                            Object.entries(data).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <div className="flex">
                                            <p className="w-[50%] px-3">{key}</p>
                                            <p className="w-[50%]">{value}</p>
                                        </div>
                                        <p className="border border-b m-2"></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
