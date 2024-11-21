
import { TableBodyCommon } from '../Common'
import { queriesTodosTopicsBydCourseById } from '../../../services'

export const ListTopic = ({coursoid}:any) => {
   const dataTopic = queriesTodosTopicsBydCourseById(coursoid)
  return (
    <>
   <TableBodyCommon dataTopic={dataTopic}/>

    </>
  )
}
