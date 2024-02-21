import React from "react";

const Dnyanesh = ({name ,age}) => {
  return (
    <div>
      <div className="text-white">
        <div className="w-full h-96 bg-slate-700 text-white ">
          Hello from Dnyanesh Components
             {name}
              {age}
        </div>
      </div>
    </div>
  );
};

export default Dnyanesh;
