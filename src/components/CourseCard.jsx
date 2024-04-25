import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className='grid grid-cols-2 items-center'>
                <img src={course.logo} alt={course.courseName} className="w-auto h-40 object-cover" />
                <div className="flex flex-col pr-5">
                    <p className="text-sky-600">World Ranking: {course.worldRanking}</p>
                    <p className="text-sky-600">Germany Ranking: {course.germanyRanking}</p>
                    <a href={course.courseWebsite} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 my-2 text-center w-40">Course Website</a>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-extrabold mb-2">{course.university}</h2>
                <div className='grid grid-cols-2 items-center'>
                    <div className="flex justify-between flex-col pr-5">
                        <p className="text-gray-700 font-bold">{course.courseName}</p>
                        <p className="text-gray-700">Degree: {course.degreeName}</p>
                        <p className="text-gray-700 mb-2">Stream: {course.streamName}</p>
                    </div>
                    <div className="flex justify-between flex-col text-green-600 ">
                        <p >Beginning Semester: {course.beginningSemester}</p>
                        <p >Duration: {course.duration}</p>
                        <p >Tuition Fee: {course.tuitionFee}</p>

                    </div>
                </div>
                <div className="flex flex-col justify-between my-2">
                    <p className="text-gray-700">Teaching Language: {course.teachingLanguage.length > 1 ? course.teachingLanguage.map((language, index) => <span key={index}>{language}{index !== course.teachingLanguage.length - 1 && ', '}</span>) : course.teachingLanguage}</p>
                    <p className="text-gray-700">German Grade Requirement: {course.germanGradeRequirement}</p>
                </div>

                <button className=" text-sky-600 px-4 py-2 rounded-md w-full mt-4 hover:bg-gray-200 border border-sky-600">Submit Application</button>
            </div>
        </div>
    );
};

export default CourseCard;
