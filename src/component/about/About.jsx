import React from 'react';

const About = () => {
    return (
        <div>
         <div className="hero min-h-screen bg-slate-100">
         <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/48g4FGq/download.webp" className="w-60 md:max-w-sm rounded-lg shadow-xl" />
         <div className='p-0'>
           <h1 className="text-center md:text-left  text-xl md:text-3xl font-bold">A partial list of our services includes:</h1>
           <ul className= 'text-sm md:text-lg font-semibold list-inside text-center md:text-left  list-none  md:list-disc   text-orange-600 '>
             <li>Scouting a venue</li>
             <li>Developing a theme</li>
             <li>Organizing a tasting with up to three caterers</li>
             <li>Recommending up to three florists (if necessary)</li>
             <li>Recommending up to three photographers (if necessary)</li>
             <li>And, depending on the wishes, being on-site or on-call during the event</li>
           </ul>
        </div>
        </div>
        </div>
           
        </div>
    );
};

export default About;