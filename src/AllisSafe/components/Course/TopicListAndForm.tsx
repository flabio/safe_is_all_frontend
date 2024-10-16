import { useState } from 'react';
import { styled } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TopicIcon from '@mui/icons-material/Topic';
import { Avatar,Button, Card,  DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export const TopicListAndForm = ({open, setOpen,topic, setTopic}:any) => {
   
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
    const handleClose = () => {
        setOpen(false);
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
         sdhsdh
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
          <Card sx={{ maxWidth: 'sm' }}>
         
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              sdhhsdhds
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary="flabio" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary="flabio" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary="flabio" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <RepeatOneOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Zip Code" secondary="flabio" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FiberPinIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Provider" secondary="flabio" />
                </ListItem>
              </List>

            </CardContent>
            <CardActions>
              <Button size="small" color='success' startIcon={<EditIcon />}
               >Edit</Button>
              <Button size="small" color='error' startIcon={<DeleteIcon />}
               >Remove</Button>
              <Button color='inherit'  startIcon={<CancelIcon />}>
                Close
              </Button>

            </CardActions>
          </Card>
        </DialogContent>
      </BootstrapDialog>
    
    
    </>
  )
}
