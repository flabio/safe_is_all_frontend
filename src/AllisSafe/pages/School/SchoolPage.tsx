import { SyntheticEvent, useState } from 'react'

import { FormSchool, ListSchool } from '../../components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';


const initForm = {
  id: 0,
  name: "",
  active: true
}
export const SchoolPage = () => {

 

  const [schoolData, setSchoolData] = useState(initForm)
console.log(schoolData)
  const [value, setValue] = useState(0);



  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSchoolData(initForm)
    console.log(event)
};
  return (
    <>
     <div className='row'>
                <div className="col-12">
                    <div className="card card-orange">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Lists" {...a11yProps(0)} />
                                    <Tab label={`${schoolData?.id>0?"Editar":"Create"}`} {...a11yProps(1)} />

                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                            <ListSchool setValue={setValue}  setSchoolData={setSchoolData}  />
                  
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                            <FormSchool schoolData={schoolData} />
            
                            </CustomTabPanel>

                        </Box>
                    </div>
                </div>
            </div>

    </>
  )
}


