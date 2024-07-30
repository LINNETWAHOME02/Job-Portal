import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

const EditJob = () => {
  const { id } = useParams();
  //console.log(id)

  //For the options array below, selectedOption is an array/object representing the selected skills
  const [selectedOption, setSelectedOption] = useState(null);

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  //Use loader, destructure the data you want to use
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  //This function takes one arg, data, and is to be used as an event handler for form submissions
  const onSubmit = (data) => {
      //Assign the value of selectedOption to the skills property of the data object
      data.skills = selectedOption;
      // console.log(data)
      fetch(`http://localhost:5000/edit-job/${id}`, {
          method: "PATCH",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data) //the data object is serialized to JSON and sent as the request body
      })
      .then(res => res.json())//This will handle the response from the server and when received, convert to JSON
      .then((result) => {
          //log the result of the JSON convertion to the console
          console.log(result)
          //Alert message on successful job update
          if(result.acknowledged === true){
              alert("Job Updated Successfully")
          }
          reset()
      })
  }

  // Options for the Required Skill Sets section
  const options = [
      {value: "JavaScript", label: "JavaScript"},
      {value: "Python", label: "Python"},
      {value: "Java", label: "Java"},
      {value: "C++", label: "C++"},
      {value: "Ruby", label: "Ruby"},
      {value: "HTML", label: "HTML"},
      {value: "CSS", label: "CSS"}
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        {/* Creating form using 'react-hook-form.com' */}

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="post-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>

              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="post-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>

              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="post-job-input"
              />
            </div>
          </div>

          {/* 2nd Row */}
          <div className="post-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>

              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="post-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>

              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="post-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="post-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>

              <select {...register("salaryType")} className="post-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>

              <input
                type="text"
                placeholder="Ex: London"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="post-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="post-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>

              <input
                type="date"
                placeholder="Ex: 06-29-2023"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="post-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>

              <select
                {...register("experienceLevel")}
                className="post-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="Any Experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>

            <CreatableSelect
              defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="post-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="post-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>

              <input
                type="url"
                placeholder="Paste your company logo URL: https://weshare.com/img-2"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="post-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>

              <select
                {...register("employmentType")}
                className="post-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>

            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-600"
              rows={6}
              placeholder="Provide job description..."
              defaultValue={description}
              {...register("description")}
            />
          </div>

          {/* Last row */}
          <div>
            <label className="block mb-2 text-lg">Job Posted By: </label>

            <input
              type="email"
              placeholder="Ex: youremail@mail.com"
              defaultValue={postedBy}
              {...register("postedBy")}
              className="post-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-orange-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default EditJob;
