import Image from "next/image";
import React from "react";

const BannerDown = () => {
  return (
    <>
      <div className="downbg relative z-20 max-w-7xl mx-auto bg-white rounded-md p-6 grid grid-cols-3 shadow-lg">
        <div className="down-bgone relative">
          <div className="overlay absolute top-0 left-0 w-full h-full p-6"></div>
          <div className="flex gap-8 p-6">
            <div>
              <Image
                src="/international-client.png"
                className="relative z-30"
                width={50}
                height={50}
                alt="sdf"
              />
            </div>
            <div className="relative z-30">
              <h4 className="text-white text-2xl font-semibold">
                World Wide Clients{" "}
              </h4>
              <p className="text-white">We have world wide client base</p>
            </div>
          </div>
        </div>
        <div className="down-bgtwo relative">
          <div className="overlay absolute top-0 left-0 w-full h-full p-6"></div>
          <div className="flex gap-8 p-6">
            <div>
              <Image
                src="/international-client.png"
                className="relative z-30"
                width={50}
                height={50}
                alt="sdf"
              />
            </div>
            <div className="relative z-30">
              <h4 className="text-white text-2xl font-semibold">
                World Wide Clients{" "}
              </h4>
              <p className="text-white">We have world wide client base</p>
            </div>
          </div>
        </div>
        <div className="down-bgthree relative">
          <div className="overlay absolute top-0 left-0 w-full h-full p-6"></div>
          <div className="flex gap-8 p-6">
            <div>
              <Image
                src="/international-client.png"
                className="relative z-30"
                width={50}
                height={50}
                alt="sdf"
              />
            </div>
            <div className="relative z-30">
              <h4 className="text-white text-2xl font-semibold">
                World Wide Clients{" "}
              </h4>
              <p className="text-white">We have world wide client base</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerDown;
