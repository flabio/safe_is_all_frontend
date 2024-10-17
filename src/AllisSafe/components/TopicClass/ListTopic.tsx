import React, { useState } from 'react'
import { TableBodyCommon } from '../Common'
import { queriesTodosTopics, queriesTodosTopicsBydCourseById } from '../../../services'

export const ListTopic = ({coursoid}:any) => {
  // TODO: Implement ListTopic component using Material-UI Table and TableBodyCommon component.
   const dataTopic = queriesTodosTopicsBydCourseById(coursoid)

  return (
    <>
   <TableBodyCommon dataTopic={dataTopic}/>

    </>
  )
}
