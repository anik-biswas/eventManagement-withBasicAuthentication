const OpenTime = () => {
    return (
        <div>
            <h2 className="text-5xl my-10 text-orange-600 text-center">Opening Time</h2>
            <div className="grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            <div className="card w-60 bg-base-100 shadow-xl">
             <div className="card-body">
             
           <div className="card-actions justify-center">
           <div className="  items-center justify-center align-middle">
            <p className="text-xl text-orange-400 mb-5">Postal Address</p>
             <p className="text-lg">Event Agency</p>
             <p className="text-lg">Ottawa,k1t</p>
            </div> 
           
           </div>
           </div>
           </div>
            
           <div className="card w-60 bg-base-100 shadow-xl">
             <div className="card-body">
             
           <div className="card-actions justify-center">
           <div className="  items-center justify-center align-middle">
            <p className="text-xl text-orange-400 mb-5">Open Hours</p>
             <p className="text-lg">Sunday to Thursday</p>
             <p className="text-lg">10.00AM-5.00.PM</p>
            </div> 
           
           </div>
           </div>
           </div>
           <div className="card w-60 bg-base-100 shadow-xl">
             <div className="card-body">
             
           <div className="card-actions justify-center">
           <div className="  items-center justify-center align-middle">
            <p className="text-xl text-orange-400 mb-5">Phone & Email</p>
             <p className="text-lg">+88-01814-545553</p>
             <p className="text-lg">anik@gmail.com</p>
            </div> 
           
           </div>
           </div>
           </div>
           <div className="card w-60 bg-base-100 shadow-xl">
             <div className="card-body">
             
           <div className="card-actions justify-center">
           <div className="  items-center justify-center align-middle">
            <p className="text-xl text-orange-400 mb-5">Sessions</p>
             <p className="text-lg">Morning 10AM-11.00AM</p>
             <p className="text-lg">Afternoon 2.00PM-3.00PM</p>
            </div> 
           
           </div>
           </div>
           </div>
           
            </div>
        </div>
    );
};

export default OpenTime;