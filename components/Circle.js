import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { BsPiggyBank } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoGitNetworkOutline } from "react-icons/io5";
import { TbAdjustmentsDollar } from "react-icons/tb";
import { MdDocumentScanner } from "react-icons/md";

const Circle = () => {
  return (
    <>
      <div className="py-20 bg-indigo-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-2 justify-center mb-20">
            <span className="text-white text-xl font-bold flex gap-5 items-center">
              <MdOutlineHorizontalRule className="w-5" />
              Boost Business Growth
              <MdOutlineHorizontalRule className="w-5" />
            </span>
            <h2 className="text-5xl text-amber-300 font-semibold w-2/3 text-center leading-tight pb-5">
              Construction Marketplace for Builders & Suppliers
            </h2>
            <p className="text-white text-lg text-center w-3/4">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              incidunt laborum expedita a hic cumque veniam nobis rem accusamus,
              corrupti tenetur accusantium atque eaque!{" "}
            </p>
          </div>
          <div className="w-full grid grid-cols-3 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-center">
                <span>
                  <BsPiggyBank className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                  Access to Materials Quicker Reducing Extra Cost
                </h4>
              </div>
              <div className="flex gap-6 items-center">
                <span>
                  <GiMoneyStack className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                  Get Financing Approval in Minutes with Better Terms
                </h4>
              </div>
              <div className="flex gap-6 items-center">
                <span>
                  <MdOutlineManageHistory className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                  Manage Orders Real-Time in 1 Centralized Location
                </h4>
              </div>
            </div>
            <div>

            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-center">
                <span>
                  <IoGitNetworkOutline className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                  Access to a network of vetted builders and high rise projects
                </h4>
              </div>
              <div className="flex gap-6 items-center">
                <span>
                  <TbAdjustmentsDollar className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                Higher Margins Through Buildstock’s Net 5 payment
                </h4>
              </div>
              <div className="flex gap-6 items-center">
                <span>
                  <MdDocumentScanner className="text-amber-300 text-5xl" />
                </span>
                <h4 className="text-white text-xl">
                Digitization and standardization companies product catalog 
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
