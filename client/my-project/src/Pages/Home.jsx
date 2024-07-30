import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar'
import Newsletter from '../components/Newsletter'

const Home = () => {

  //For search input
  const [query, setQuery] = useState("")
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }
  console.log(query)

  //Filtering jobs
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  //To load data
  useEffect(() => {
    setIsLoading(true);
    //Call-back to fetch the data
    fetch("http://localhost:5000/all-jobs")
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setJobs(data)
      setIsLoading(false)
    })
   }, []) // [] means empty dependancy
  //  console.log(jobs)

   //Filter based on job titles
   const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
   //console.log(filteredItems)

   /****************RADIO-BASED BUTTON FILTERING********************/
   const handleRadioButtonChange = (event) => {
      setSelectedCategory(event.target.value)
   }

   /**************************BUTTON-BASED FILTERING*************************/
   const handleButtonChange = (event) => {
      setSelectedCategory(event.target.value)
   }

   /* Calculate the index range */
   const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
   }

   /* Function for next page when clicked */
   const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1);
    }
   }

   /* Function for previous page when clicked */
   const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
   }

   /*************MAIN FUNCTIONS***************/
   const filteredData = (jobs, selectedItem, query) => {
    let filteredJobs = jobs

    //Filtering input items
    if (query) {
      filteredJobs = filteredItems
    }

    //Category filtering
    if (selectedItem) {
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
        jobLocation.toLowerCase() === selectedItem.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selectedItem) ||
        postingDate >= selectedItem ||
        salaryType.toLowerCase() === selectedItem.toLowerCase() ||
        experienceLevel.toLowerCase() === selectedItem.toLowerCase() ||
        employmentType.toLowerCase() === selectedItem.toLowerCase()
      ));
    }

    /* Sliced the data based on current page */
    const { startIndex, endIndex } = calculatePageRange();
    /* Filter the data */
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
   }

   const result = filteredData(jobs, selectedCategory, query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      
      {/* Main Content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        
        {/* Left sidebar */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleRadioButtonChange={handleRadioButtonChange} handleButtonChange={handleButtonChange}/>
        </div>
        
        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {
            isLoading ? (<p className="font-medium">Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          }

          {/* Pagination */}
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button 
                  onClick={previousPage}
                  disabled={currentPage === 1}
                  className="hover:underline"
                >
                  Previous
                </button>
                
                <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                  className="hover:underline"
                >
                  Next
                </button>
              </div>
            ) : ""

          }

        </div>
        
        {/* Right sidebar */}
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Home