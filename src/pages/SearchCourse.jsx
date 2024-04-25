import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const SearchCourse = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const applyFilters = (filters) => {
    let filtered = [...courses] || [];
    console.log(filters);
    if (filters?.university && filters?.university !== "") {
      filtered = filtered?.filter((course) =>
        course?.university
          ?.toLowerCase()
          ?.includes(filters?.university?.toLowerCase())
      );
    }

    if (filters?.courseName && filters?.courseName !== "") {
      filtered = filtered?.filter((course) =>
        course?.courseName
          ?.toLowerCase()
          ?.includes(filters?.courseName?.toLowerCase())
      );
    }
    if (filters?.germanyRanking && filters?.germanyRanking !== "") {
      filtered = filtered?.filter(
        (course) => course?.germanyRanking === filters?.germanyRanking
      );
    }
    if (filters?.courseType && filters?.courseType !== "") {
      filtered = filtered?.filter(
        (course) => course?.degreeName === filters?.courseType
      );
    }
    if (filters?.teachingLanguage && filters?.teachingLanguage !== "") {
      filtered = filtered?.filter(
        (course) => course?.teachingLanguage.includes(filters?.teachingLanguage)
      );
    }
    if (filters?.beginnerSemester && filters?.beginnerSemester !== "") {
      filtered = filtered?.filter(
        (course) => course?.beginningSemester === filters?.beginnerSemester
      );
    }
    if (filters?.duration && filters?.duration !== "") {
      filtered = filtered?.filter(
        (course) => course?.duration === filters?.duration
      );
    }
    if (filters?.tuitionFeeMin && filters?.tuitionFeeMax && filters?.tuitionFeeMin !== "" && filters?.tuitionFeeMax !== "") {
      console.log(filtered, filters, "++");
      filtered = filtered?.filter(
        (course) => parseInt(filters?.tuitionFeeMin) <= course?.tuitionFee && course?.tuitionFee <= parseInt(filters?.tuitionFeeMax)
      );
    }
    setFilteredCourses(filtered);
  };

  return (
    <div className="">
      <nav className="bg-blue-950 text-white font-medium py-2 flex justify-between items-center">
        <h1 className="pl-4 text-lg">Course Search</h1>
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          {isSidebarOpen ? "Close Filters" : "Open Filters"}
        </button>
      </nav>
      <div className="flex flex-col md:flex-row border-sky-100 border-4 ">
        <div
          className={`bg-blue-950 ${isSidebarOpen ? "md:block" : "hidden"
            } md:block`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            applyFilters={applyFilters}
          />
        </div>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
