import { SyntheticEvent, useState } from 'react'

import {  TypeCourseForm, TypeCourseList } from '../../components';
import { queriesTodosTypeCourses } from '../../../services';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';

export const TypeCoursePage = () => {
    const dataCourse = queriesTodosTypeCourses()
    const [value, setValue] = useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                                    <Tab label="Create" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <TypeCourseList dataCourse={dataCourse} />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <TypeCourseForm />
                            </CustomTabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}