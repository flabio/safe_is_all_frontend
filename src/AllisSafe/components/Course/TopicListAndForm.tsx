
import { styled } from '@mui/material/styles';
import {  DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';



import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FormTopic, ListTopic } from '../TopicClass';
import { SyntheticEvent, useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const TopicListAndForm = ({ open, setOpen, topic, setTopic }: any) => {

  const [fullWidth, setFullWidth] = useState(true);
  const [value, setValue] = useState(0);

  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('lg');
  const handleClose = () => {
    setOpen(false);
    setMaxWidth('md');
    setFullWidth(true);
    setTopic({ course_id: 0, school_id: 0 });
  };
  const handleChange = ( event: SyntheticEvent ,newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}

      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {topic.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className='card-header' value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Lists" {...a11yProps(0)} />
                <Tab label="Create" {...a11yProps(1)} />

              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ListTopic coursoid={topic.id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FormTopic coursoid={topic.id} />
            </CustomTabPanel>

          </Box>
        </DialogContent>
      </BootstrapDialog>


    </>
  )
}
