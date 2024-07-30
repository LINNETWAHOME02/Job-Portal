import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimate from "../Pages/SalaryEstimate";
import EditJob from "../Pages/EditJob";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { 
          path: "/",
          element: <Home />
        },
        {
          path: "/post-job",
          element: <PostJob />
        },
        {
          path: "/my-jobs",
          element: <MyJobs/>
        },
        {
          path: "/salary",
          element: <SalaryEstimate/>
        },
        {
          path: "/edit-job/:id",
          element: <EditJob/>,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`) //Get a single job instead of all jobs
        },
        {
          path: "/job/:id",
          element: <JobDetails/>
        },
        {
          path: "/log-in",
          element: <LogIn/>
        },
        {
          path: "/sign-up",
          element: <SignUp/>
        }
      ]
    },
  ]);

export default router;