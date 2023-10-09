
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/b5ZvSw7/wed.webp" className="w-full bg-slate-900 opacity-70" />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <div className="text-blue-900 text-3xl md:text-3xl lg:text-6xl">
                    <h2> Wedding Gallery</h2>
                    <p>Celebrating love and happiness</p>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jDpwThd/birth.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0KtL15z/33585b759b6d7d8.jpg" className="w-full bg-slate-900 opacity-70" />
                    <div className="absolute inset-0 flex  justify-between items-center text-center">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <div className="text-red-700 text-3xl md:text-3xl lg:text-6xl">
                    <h2> Wedding Gallery</h2>
                    <p>Celebrating love and happiness</p>
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    
                </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HnR0RD3/a59b6b750b4f96e3bda41eae5d844a66.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="text-center justify-center items-center my-10">
                <h2 className="text-xl md:text-3xl lg:text-5xl "><span className="text-amber-500">Hello!</span> We Are an Event Planning Agency </h2>
                <p className="text-lg text-slate-400 mt-5 px-20">As the premier event planning company in New York City, we know that it’s not “one size fits all”. Each
                event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            </div>
        </div>
    );
};

export default Banner;