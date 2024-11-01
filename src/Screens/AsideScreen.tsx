
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { NavComponent } from '../components/nav/NavComponent'
import { Home } from '@mui/icons-material'
import { useState } from 'react'; import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Toolbar,
    IconButton,
    Typography,
    AppBar,
    Box,
    Avatar,
    Breadcrumbs,
} from '@mui/material';
import {
    Dashboard,
    People,
    School,
    Class,
    LocationCity,
    Public,
    Language,
} from '@mui/icons-material';

import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
export const AsideScreen = () => {
    let location = useLocation();

    let nameRutorClean = location.pathname.split('/');
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Avatar src="/img/ogo.png" sx={{
                        top: 5,
                        width: 130,
                        height: 70,
                        left: 10,

                    }} variant="square">
                        A
                    </Avatar>

                    <Box sx={{ overflow: 'auto', color: 'black' }}>
                        <List>
                            {[
                                { text: 'Dashboard', link: '/dashboard', icon: <Dashboard /> },
                                { text: 'Rol', link: '/rol', icon: <People /> },
                                { text: 'User', link: '/user', icon: <People /> },
                                { text: 'Instructor', link: '/instructor', icon: <People /> },
                                { text: 'Student', link: '/student', icon: <People /> },
                                { text: 'School', link: '/school', icon: <School /> },
                                { text: 'Course', link: '/course', icon: <Class /> },
                                { text: 'City', link: '/city', icon: <LocationCity /> },
                                { text: 'State', link: '/state', icon: <Public /> },
                                { text: 'Language', link: '/language', icon: <Language /> },
                            ].map((item, index) => (
                                <ListItem
                                    sx={{ color: 'black' }}
                                    button
                                    key={index}
                                    component={Link} to={item.link}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <br />
                    <br />
                    <br />
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to={location?.pathname}>
                            {nameRutorClean[1]}
                        </Link>
                        <Typography sx={{ color: 'text.primary' }}>{nameRutorClean[1]}</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>

        </>
    )

}


