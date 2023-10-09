import HomeCard from "../HomeCard/HomeCard";
import Banner from "../banner/Banner";
import OpenTime from "../openTime/OpenTime";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div className="mt-5">
           <Banner></Banner>
           <HomeCard></HomeCard>
           <Testimonial></Testimonial>
           <OpenTime></OpenTime>
        </div>
    );
};

export default Home;