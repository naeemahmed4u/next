import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SideBarData=[
{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},
{
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineLogin/>,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: 'Message 1',
          path: '/messages/message1',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Message 2',
          path: '/messages/message2',
          icon: <IoIcons.IoIosPaper />
        }
      ]
},
{
    title: 'Sign Up',
    path: '/Signup',
    icon: <AiIcons.AiOutlineLogout/>,
    cName: 'nav-text'
},
{
    title: 'Reports',
    path: '/Reports',
    cName: 'nav-text',
    icon: <IoIcons.IoIosPaper/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'Users',
            path: '/Reports/Users',            
            icon:<IoIcons.IoIosPaper/>
        },
        {
            title: 'Revenue',
            path: '/Reports/Revenue',            
            icon:<IoIcons.IoIosPaper/>
        }    
    ]
},
{
    title: 'Products',
    path: '/Products',
    icon: <FaIcons.FaCartPlus/>,
    cName: 'nav-text'
},
{
    title: 'Team',
    path: '/Team',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
},
]