


import React,{ SyntheticEvent, useContext, useState } from 'react'
import { UserContext } from '../../../hook';
import { StudentForm, StudentList } from '../../components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';
export const StudentPage = () => {

    const { dataContext, setDataContext } = useContext(UserContext);
    const [value, setValue] = useState(0);
    const [currentRol,setCurrentRol]=useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        event.preventDefault();
        setValue(newValue);
        setDataContext({})

    };

    return (
        <>
         <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Lists" {...a11yProps(0)} />
                        <Tab label={`${dataContext?.id > 0 ? "Editar" : "Create"}`} {...a11yProps(1)}   onClick={()=>setCurrentRol(3)}/>
                        <Tab label="Detail" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <StudentList setValue={setValue} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <StudentForm currentRol={currentRol} />
                </CustomTabPanel>
                {/* <CustomTabPanel value={value} index={2}>
                    <UserDetail />
                </CustomTabPanel> */}
                
            </Box>
               </>
    )
  }
  