import React, { useEffect, useState } from "react";
import CustomPageBanner from "../components/CustomPageBanner";

const SalaryEstimate = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  //To load the salary
  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setSalary(data));
  }, [searchText]);

  //To find data from what is received from search input
  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);
    setSalary(filter);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Page Banner using Custom page banner component */}
      <CustomPageBanner title={"Estimated Salary"} path={"Salary"} />

      {/* Search area */}
      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white font-semibold px-8 py-2 rounded-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Salary display cards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
        {
            salary.map((data) => (
                <div key={data.id} className="shadow px-4 py-8">
                    <h4 className="font-semibold text-xl">{data.title}</h4>
                    <p className="my-2 font-light text-orange-400 text-lg">{data.salary}</p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/" className="underline">{data.status}</a>
                        <a href="/" className="underline">{data.skills}</a>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default SalaryEstimate;
