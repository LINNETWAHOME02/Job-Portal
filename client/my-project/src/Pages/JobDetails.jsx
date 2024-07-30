import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import CustomPageBanner from '../components/CustomPageBanner'

const JobDetails = () => {
    const {id} = useParams();

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`)
        .then(res => res.json())
        .then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const {value: url} = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url){
            Swal.fire(`Entered URL: ${url}`)
        }
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* Page Banner using Custom page banner component */}
      <CustomPageBanner title={"This Job's Details"} path={"Single Job"} />
        
        <h2>Job Details: {id}</h2>
        <h3>{job.jobTitle}</h3>

        <button className='bg-orange-500 px-8 py-2 text-white rounded' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails