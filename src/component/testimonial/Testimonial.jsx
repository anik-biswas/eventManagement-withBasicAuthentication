

const Testimonial = () => {
    return (
        <div>
            <h2 className="text-5xl my-10 text-orange-600 text-center">Testimonial</h2>
            <div className="grid  grid-cols-1 gap-5 md:grid-cols-3 justify-items-center">
            <div className="card w-80 bg-base-100 shadow-xl">
             <div className="card-body">
             <p>I invite these Event planner to arrange a Retirement Party</p>
           <div className="card-actions justify-start">
           <div className="flex  items-center justify-center align-middle">
           <div className="avatar">
           <div className="w-12">
              <img src="https://i.ibb.co/T8kccCQ/badge.webp" />
              </div>
            </div>
            </div> 
           <div className="badge badge-outline">Jhon Snow</div>
           </div>
           </div>
           </div>
            <div className="card w-80 bg-base-100 shadow-xl">
             <div className="card-body">
             <p>I invite these Event planner to arrange a Baby Shower</p>
           <div className="card-actions justify-start">
           <div className="flex  items-center justify-center align-middle">
           <div className="avatar">
           <div className="w-12">
              <img src="https://i.ibb.co/rQfNKYb/2a.webp" />
              </div>
            </div>
            </div> 
           <div className="badge badge-outline">Robert hook</div>
           </div>
           </div>
           </div>
            <div className="card w-80 bg-base-100 shadow-xl">
             <div className="card-body">
             <p>I invite these Event planner to arrange a Birthday Party</p>
           <div className="card-actions justify-start">
           <div className="flex  items-center justify-center align-middle">
           <div className="avatar">
           <div className="w-12">
              <img src="https://i.ibb.co/1XnW1gp/download-1.webp" />
              </div>
            </div>
            </div> 
           <div className="badge badge-outline">Jonson</div>
           </div>
           </div>
           </div>
           
            </div>
        </div>
    );
};

export default Testimonial;