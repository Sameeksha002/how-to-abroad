import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, applyFilters }) => {
  const [filters, setFilters] = useState({
    university: "",
    courseName: "",
    germanyRanking: "",
    courseType: "",
    teachingLanguage: "",
    beginnerSemester: "",
    duration: "",
    tuitionFeeMin: "0",
    tuitionFeeMax: "125000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tuitionFeeMin' && parseInt(value) > parseInt(filters.tuitionFeeMax)) {
      return;
    } else if (name === 'tuitionFeeMax' && parseInt(value) < parseInt(filters.tuitionFeeMin)) {
      return;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    applyFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({
      university: "",
      courseName: "",
      germanyRanking: "",
      courseType: "",
      teachingLanguage: "",
      beginnerSemester: "",
      duration: "",
      tuitionFeeMin: "0",
      tuitionFeeMax: "125000",
    });
    applyFilters({});
  };

  return (
    <div
      className={`w-full md:w-64 lg:w-72 ${isOpen ? "block" : "hidden"
        } md:block`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-white">
          Filter Options
        </h2>
        <div>
          <input
            type="text"
            id="university"
            name="university"
            value={filters.university}
            onChange={handleChange}
            placeholder="University Name"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
          />
        </div>
        <div>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={filters.courseName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Course Name"
          />
        </div>
        <div>
          <input
            type="text"
            id="germanyRanking"
            name="germanyRanking"
            value={filters.germanyRanking}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Germany Ranking"
          />
        </div>
        <div>
          <select
            id="courseType"
            name="courseType"
            value={filters.courseType}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Course Type"
          >
            <option value="">Select Course Type</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Diploma">Diploma</option>
            <option value="Double Degree">Double Degree</option>
            <option value="Master">Master</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <select
            id="teachingLanguage"
            name="teachingLanguage"
            value={filters.teachingLanguage}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Teaching Language"
          >
            <option value="">Select Teaching Language</option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
            <option value="Danish">Danish</option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Romance">Romance</option>
            <option value="Russian">Russian</option>
            <option value="Scandinavian">Scandinavian</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <select
            id="beginnerSemester"
            name="beginnerSemester"
            value={filters.beginnerSemester}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Beginner Semester"
          >
            <option value="">Select Beginner Semester</option>
            <option value="All Quarters">All Quarters</option>
            <option value="All Trimesters">All Trimesters</option>
            <option value="Any Time">Any Time</option>
            <option value="Autumn">Autumn</option>
            <option value="Autumn Quarter">Autumn Quarter</option>
            <option value="Winter">Winter</option>
            <option value="Winter Quarter">Winter Quarter</option>
            <option value="Winter Trimesters">Winter Trimesters</option>
            <option value="Spring">Spring</option>
            <option value="Spring Quarter">Spring Quarter</option>
            <option value="Spring Trimester">Spring Trimester</option>
            <option value="Summer">Summer</option>
            <option value="Summer Quarter">Summer Quarter</option>
          </select>
        </div>
        <div>
          <select
            id="duration"
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300"
            placeholder="Duration"
          >
            <option value="">Select Duration</option>
            <option value="1 Semester">1 Semester</option>
            <option value="10 Months">10 Months</option>
            <option value="11 Months">11 Months</option>
            <option value="12 Months">12 Months</option>
            <option value="13 Months">13 Months</option>
            <option value="14 Months">14 Months</option>
            <option value="4 Semesters">4 Semesters</option>
            <option value="4 Months">4 Months</option>
            <option value="4 Trimesters">4 Trimesters</option>
          </select>
        </div>
        <div>
          <label htmlFor="tuitionFeeMin" className="block font-semibold text-white/90 mt-2">
            Minimum Tuition Fee (in Euros)
          </label>
          <input
            type="range"
            id="tuitionFeeMin"
            name="tuitionFeeMin"
            value={filters.tuitionFeeMin}
            onChange={handleChange}
            min="0"
            max="125000"
            step="100"
            className="w-full"
          />
          <span className="text-white/90 border border-white p-1 text-center flex justify-center">
            {filters.tuitionFeeMin}
          </span>
        </div>
        <div>
          <label htmlFor="tuitionFeeMax" className="block font-semibold text-white/90 mt-2">
            Maximum Tuition Fee (in Euros)
          </label>
          <input
            type="range"
            id="tuitionFeeMax"
            name="tuitionFeeMax"
            value={filters.tuitionFeeMax}
            onChange={handleChange}
            min="0"
            max="125000"
            step="100"
            className="w-full"
          />
          <span className="text-white/90 border border-white p-1 text-center flex justify-center">
            {filters.tuitionFeeMax}
          </span>
        </div>

        <div>
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded-md my-4"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
