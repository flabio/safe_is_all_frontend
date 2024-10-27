
import { SyntheticEvent, useContext, useState } from 'react';
import { LanguageList } from '../../components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, CustomTabPanel } from '../../helpers';

import { UserContext } from '../../../hook';

import { useQueryLanguages } from '../../../services';
import { LanguageForm } from '../../components/Language/LanguageForm';

export const LanguagePage = () => {
  const { dataContext,setDataContext } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);

  const useQueryTodosLanguages = useQueryLanguages(currentPage);


  const [value, setValue] = useState(0);



  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);

  };
  const handlerValue = () => {
    setValue(0)
    setDataContext({})
  }
  //console.log(edit)
  return (
    <>
      <div className='row'>
        <div className="col-12">
          <div className="card card-orange">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Lists" {...a11yProps(0)}  onClick={()=>handlerValue()} />
                  <Tab label={`${dataContext?.id > 0 ? "Edit" : "Create"}`}  {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <LanguageList currentPage={currentPage} setCurrentPage={setCurrentPage} useQueryTodosLanguages={useQueryTodosLanguages} setValue={setValue} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <LanguageForm setValue={setValue} />
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>

    </>
  )
}


