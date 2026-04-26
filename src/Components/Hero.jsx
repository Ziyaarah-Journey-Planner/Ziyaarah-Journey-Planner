import { Link } from "react-router-dom";
import { CircleDot, CheckSquare } from "lucide-react";


function Hero() {
    return (
        <section className="bg-gray-50 py-16" >

   <div className="max-w-7xl mx-auto px-6  grrid md:grid-cols-2 gap-10 items-center">

        <div><span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
             Trusted by 10,000+ Pilgrims
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Begin Your Sacred <br/> Journey <br />
            with Faith and <br />
            <span className="text-green-600">Preparation</span>
          </h1>

          <p className="text-gray-600 mt-6">
            Plan your Hajj or Umrah with confidence <br/>    using our comprehensive
            spiritual journey planner.<br/> Track rituals, access authentic
            resources, <br/> and prepare both spiritually and practically.
          </p>

  </div>  
        <div className="flex gap-4 mt-6">
        <Link to="/community" className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
            Join Our Community
          </Link>
            <Link to="/demo" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Watch Demo
            </Link>
            
        </div>
   
        <div className="relative "> 
<img 
src ="/kaaba.jpg" 
alt = "Kaaba"
className="rounded-2xl shadow-lg  absolute bottom-4 right-4 w-100 h-100 " />

<div className="  flex items-center  justify-between gap-2  absolute bottom-85 right-4 pt-2  bg-white pt-1 px-4 py-2 mr-4 rounded-lg shadow ">
    <div className="  w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white font-bold" >
        <CheckSquare size={20} className="text-white  " /></div>
<div  ><p className="text-sm font-medium font-bold"> Journey Completed </p>
<p className="text-xs text-gray-500">Spiritual Journey Planner</p>
</div>

</div>

<div className=" flex items-center  justify-between  gap-2 absolute bottom-8 right-20 mr-30 bg-white px-4 py-2 rounded-lg shadow ">
<div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold" >
<CircleDot size={20} className="text-white" />
</div>
<div >
<p className="text-sm font-medium font-bold"> Sacred Journey </p>
<p className="text-xs text-gray-500">Plan with confidence</p>

</div>

</div>
        </div>
      </div>
    </section>
  )
}
export default Hero;
