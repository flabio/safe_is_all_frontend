
import { SyntheticEvent, useState } from 'react';
import { CityFrom, CityList } from '../../components';
import { CityModel } from '../../model';
import { useCities } from '../../../services';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';
export const CityPage = () => {


  const [editData, setEditData] = useState(CityModel)
  const dataCities = useCities()
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);

  };

  //console.log(edit)
  return (
    <>
      <div className='row'>
        <div className="col-12">
          <div className="card card-orange">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Lists" {...a11yProps(0)} />
                  <Tab label= {`${editData.id>0?"Edit":"Create"}`}  {...a11yProps(1)} />

                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <CityList dataCities={dataCities} setEditData={setEditData} setValue={setValue} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>

                <CityFrom editData={editData} setEditData={setEditData} />
              </CustomTabPanel>

            </Box>
          </div>
        </div>
      </div>


    </>
  )
}


