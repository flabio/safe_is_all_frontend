
import { SyntheticEvent, useContext, useState } from 'react';
import { RolListComponent, RolForm } from '../../components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';
import { UserContext } from '../../../hook';


export const RolPage = () => {
  const { dataContext, setDataContext }: any = useContext(UserContext);

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);

  };
  const handlerValue = () => {
    setValue(0)
    setDataContext({})
  }
  return (
    <>
      <div className='row'>
        <div className="col-12">
          <div className="card card-orange">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Lists" {...a11yProps(0)} onClick={() => handlerValue()} />
                  <Tab label={`${dataContext?.id > 0 ? "Edit" : "Create"}`}  {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <RolListComponent setValue={setValue} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <RolForm setValue={setValue} />
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>

    </>
  )
}


