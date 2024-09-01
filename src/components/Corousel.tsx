interface CorouselProps {
    images: string[]
}
const Corousel = (props:CorouselProps) => {
    const {images} = props;
    return (
        <div className='flex justify-center'>
            <div className='bg-purple-100 sm:w-[70%] h-auto bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url()` }}>
                <div id="carouselExampleCaptions" className="carousel slide sm:w-full h-full" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            images.map((image, index) => {
                                return (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={image} className="d-block sm:w-[300px] h-[460px] ml-[38%] border" alt="..." />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-purple-300 rounded-lg" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-purple-300 rounded-lg" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Corousel
