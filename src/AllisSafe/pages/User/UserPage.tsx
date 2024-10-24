import { SyntheticEvent, useContext, useState } from 'react'
import { UserContext } from '../../../hook';
import { UserList } from '../../components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';
import { UserForm } from '../../components/User/UserForm';

export const UserPage = () => {
   
    const { dataContext,setDataContext } = useContext(UserContext);
    const [value, setValue] = useState(0);
    console.log(dataContext)

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setDataContext({})
  
       
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
                                    <Tab label={`${dataContext?.id>0?"Editar":"Create"}`} {...a11yProps(1)} />

                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                            <UserList setValue={setValue}/>
                  
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                            <UserForm />
            
                            </CustomTabPanel>

                        </Box>
                    </div>
                </div>
            </div>
    
        </>
    )
}
