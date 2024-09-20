
import React from 'react'
import { Link } from 'react-router-dom';

export const NavComponent = () => {
  return (
    <>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
   
            <Link to="/" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="rol" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Rol</p>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>User</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Instructor</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Student</p>
            </a>
          </li>
          <li className="nav-item">
            <Link to="school" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>School</p>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="course" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Course</p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="city" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>City</p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="state" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>State</p>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  )
}
