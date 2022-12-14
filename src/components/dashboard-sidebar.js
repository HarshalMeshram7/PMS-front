import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Tooltip, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import htp_logo from "../../public/static/PMS/htp_transparent_logo.png"

import AssessmentIcon from '@mui/icons-material/Assessment';
import SchoolIcon from '@mui/icons-material/School';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SportsIcon from '@mui/icons-material/Sports';
import TourIcon from '@mui/icons-material/Tour';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SecurityIcon from '@mui/icons-material/Security';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import SportsScoreIcon from '@mui/icons-material/SportsScore';


import { NavItem } from './nav-item';
import { useState } from 'react';
import useStorage from 'src/hooks/useStorage';

const access = [{
  Federation: "5",
  Club: "4",
  Team: "3",
  Player: "2",
}]

const items = [
  
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard',
    role: '1'
  },

  {
    href: '/useraccess',
    icon: (<ManageAccountsIcon fontSize="small" />),
    title: 'User Access',
    role: '1',
  },

  {
    href: '/federation',
    icon: (<SportsScoreIcon fontSize="small" />),
    title: 'Federation',
    role: '1',
  },

  {
    href: '/academy',
    icon: (<SchoolIcon fontSize="small" />),
    title: 'Academies',
    role: '1',
  },

  {
    href: '/clubs',
    icon: (<SecurityIcon fontSize="small" />),
    title: 'Clubs',
    role: '3'
  },

  {
    href: '/team',
    icon: (<GroupsIcon fontSize="small" />),
    title: 'Team',
    role: '1'
  },

  {
    href: '/players',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Players',
    role: '2'
  },

  {
    href: '/contract-management',
    icon: (<GroupsIcon fontSize="small" />),
    title: 'Contract Management',
    role: '3'
  },

  {
    href: '/administrative-template',
    icon: (<GroupsIcon fontSize="small" />),
    title: 'Administrative Template',
    role: '3'
  },

  {
    href: '/staff-registration',
    icon: (<HowToRegIcon fontSize="small" />),
    title: 'Staff Registration',
    role: '3'
  },
  
  {
    href: '/referee',
    icon: (<SportsIcon fontSize="small" />),
    title: 'Referee Registration',
    role: '3'
  },

  {
    href: '/coach-registration',
    icon: (<SettingsAccessibilityIcon fontSize="small" />),
    title: 'Coaches Registration',
    role: '3'
  },


  {
    href: '/tournament-matches',
    icon: (<TourIcon fontSize="small" />),
    title: 'Tournaments and Matches',
    role: '3'
  },
  {
    href: '/scorecard',
    icon: (<AssignmentIcon fontSize="small" />),
    title: 'Scorecard',
    role: '3'
  },

  {
    href: '/reports',
    icon: (<AssessmentIcon fontSize="small" />),
    title: 'Reports',
    role: '3'
  },

  // {
  //   href: '/profile',
  //   icon: (<ManageAccountsIcon fontSize="small" />),
  //   title: 'Profile',
  //   role: '4'
  // },
  // {
  //   href: '/settings',
  //   icon: (<CogIcon fontSize="small" />),
  //   title: 'Settings',
  //   role: '5'
  // },
  // {
  //   href: '/login',
  //   icon: (<LockIcon fontSize="small" />),
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: (<XCircleIcon fontSize="small" />),
  //   title: 'Error'
  // }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  // const [role, setRole] = useState("Player")
  const { role } = useStorage();


  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                {/* <Logo                   //original logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                /> */}
                <Tooltip title="Federation Logo">
                  <img src={htp_logo.src}
                    width={"150vw"} />
                </Tooltip>
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  PMS
                </Typography>
                {/* <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography> */}
              </div>
              {/* <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items
          // .filter(item =>
          //   item.role <= access[0][role]
          // )
          .map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >

        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
