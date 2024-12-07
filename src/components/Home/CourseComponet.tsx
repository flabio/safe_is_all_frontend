
import { Box, TextField } from '@mui/material';
import React from 'react'

const courses = [
    {
      id: 1,
      image: "/img/Electrical-Technologies.webp",
      categories: ["DOB"],
      title: "Electrical Course",
      rating: 4.0,
      reviews: 3500,
      students: 4500,
      duration: "12h 45m",
      lectures: 65,
      instructor: "Luis Castro",
      price: 255,
    },
    {
      id: 2,
      image: "/img/Plumbing_Course.jpg",
      categories: ["DOB"],
      title: "Plumbing Course",
      rating: 4.5,
      reviews: 2000,
      students: 8000,
      duration: "24h 56m",
      lectures: 55,
      instructor: "Lori Stevens",
      price: 500,
    },
    {
      id: 3,
      image: "/img/SST+Specialized+Elective+Courses.jpg",
      categories: ["DOB"],
      title: "Site Safety Training (SST) Specialized Elective Courses",
      rating: 4.0,
      reviews: 2000,
      students: 1200,
      duration: "09h 56m",
      lectures: 21,
      instructor: "Frances Guerrero",
      price: 200,
    },
    {
      id: 4,
      image: "/img/crane_safety_cropped.webp",
      categories: ["DOB"],
      title: "Cranes & Derrick Courses",
      rating: 4.0,
      reviews: 3500,
      students: 4500,
      duration: "12h 45m",
      lectures: 65,
      instructor: "Luis Castro",
      price: 255,
    },
    {
      id: 5,
      image: "/img/health-and-safety-training-courses-in-Dubai-1024x576.jpg",
      categories: ["DOB"],
      title: "Safety Courses",
      rating: 4.5,
      reviews: 2000,
      students: 8000,
      duration: "24h 56m",
      lectures: 55,
      instructor: "Lori Stevens",
      price: 500,
    },
    {
      id: 6,
      image: "/img/images.jpeg",
      categories: ["DOB"],
      title: "Scaffold Courses",
      rating: 4.0,
      reviews: 2000,
      students: 1200,
      duration: "09h 56m",
      lectures: 21,
      instructor: "Frances Guerrero",
      price: 200,
    },{
      id: 7,
      image: "/img/sst-supervisor-1-scaled.webp",
      categories: ["DOB"],
      title: "Site Safety Training (SST) Prescribed Courses",
      rating: 4.5,
      reviews: 2000,
      students: 8000,
      duration: "24h 56m",
      lectures: 55,
      instructor: "Lori Stevens",
      price: 500,
    },
    {
      id: 8,
      image: "/img/SST+General+Elective+Courses.jpg",
      categories: ["DOB"],
      title: "Site Safety Training (SST) General Elective Courses",
      rating: 4.0,
      reviews: 2000,
      students: 1200,
      duration: "09h 56m",
      lectures: 21,
      instructor: "Frances Guerrero",
      price: 200,
    },
  ];
export const CourseComponet = () => {
  return (
   <>
   
   <br/>
   <br/>

   <section className="hero">

        <div className="hero-content">
            <span className="badge">Opening Sale Discount 50%</span>
            <h1>Safe building</h1>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            <a href="#" className="btn btn-primary">Show Now</a>
        </div>
        <div className="hero-image">
            <img src="/public/img/home.jpeg" alt="Woman holding grocery bag"/>
         </div>
    </section>
        <div className="box-border">   </div>
     <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-info">
            <div className="categories">
              {course.categories.map((category, index) => (
                <span className="category" key={index}>
                  {category}
                </span>
              ))}
            </div>
            <h3 className="course-title">{course.title}</h3>
            <div className="rating">
              <span>⭐ {course.rating}</span> ({course.reviews})
            </div>
            <div className="details">
              <span>{course.duration}</span> • <span>{course.lectures} lectures</span>
            </div>
            <div className="instructor">
              <br/>
              <br/>
              <img
                src="/img/user.png"
                alt={course.instructor}
                className="instructor-image"
              />
              <span>{course.instructor}</span>
            </div>
          </div>
          <div className="course-footer">
            <span className="price">${course.price}</span>
            <span className="students">{course.students} Students</span>
          </div>
        </div>
      ))}
    </div>
   </>
  )
}
