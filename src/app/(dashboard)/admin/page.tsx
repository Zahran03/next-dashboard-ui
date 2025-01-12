import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* atttendance chart */}
          <div className="w-full lg:h-2/3 h-[450px]">r</div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]"></div>
      </div>
      {/* right section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8"></div>
    </div>
  );
};

export default page;
