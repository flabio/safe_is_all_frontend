import { SyntheticEvent, useContext, useState } from 'react'
import { StateForm, StateList } from '../../components'

import { useCities, useStates } from '../../../services'



import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';
import { StateModel } from '../../model';
import { UserContext } from '../../../hook';


export const StatePage = () => {
    const { dataContext } = useContext(UserContext);


    const { data, isLoading } = useStates()
    const [value, setValue] = useState(0);


    const cityData = useCities()
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        event.preventDefault();
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
                                    <Tab  label= {`${dataContext?.id > 0?"Edit":"Create"}`}  {...a11yProps(1)} />

                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <StateList data={data} isLoading={isLoading} setValue={setValue}/>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <StateForm cityData={cityData} setValue={setValue} />
                            </CustomTabPanel>

                        </Box>
                    </div>
                </div>
            </div>

        </>
    )
}



