import React from 'react'
import { ContactComponent, FooterComponent, HeaderComponent } from '../../components/Login'
import { CourseComponet } from '../../components/Home/CourseComponet'

export const HomePage = () => {
  return (
   <>
    <HeaderComponent />
    <CourseComponet/>
      <FooterComponent />
      </>
  )
}
