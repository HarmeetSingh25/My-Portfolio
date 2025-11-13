import React from "react";
import {Timeline}  from "../component/Timeline";
import { experienceData } from "../component/Experiencesdata";



const Experiences = () => {
  return (
    <div className="w-full">
      {/* <Timeline data={Experiences} /> */}
<Timeline data={experienceData} />
    </div>
  );
};

export default Experiences;
