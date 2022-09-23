import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';



export const CoachListResult = ({ CoachAccess,handleOpenCoachDetails, ...rest }) => {
  const [selectedStaffIds, setSelectedStaffIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const handleSelectAll = (event) => {
    let newSelectedStaffIds;
    if (event.target.checked) {
  



      newSelectedStaffIds = CoachAccess.map((customer) => customer.id);
    } else {
      newSelectedStaffIds = [];
    }

    setSelectedStaffIds(newSelectedStaffIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedStaffIds.indexOf(id);
    let newSelectedStaffIds = [];

    if (selectedIndex === -1) {
      newSelectedStaffIds = newSelectedStaffIds.concat(selectedStaffIds, id);
    } else if (selectedIndex === 0) {
      newSelectedStaffIds = newSelectedStaffIds.concat(selectedStaffIds.slice(1));
    } else if (selectedIndex === selectedStaffIds.length - 1) {
      newSelectedStaffIds = newSelectedStaffIds.concat(selectedStaffIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedStaffIds = newSelectedStaffIds.concat(
        selectedStaffIds.slice(0, selectedIndex),
        selectedStaffIds.slice(selectedIndex + 1)
      );
    }

    setSelectedStaffIds(newSelectedStaffIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedStaffIds.length === staffAccess.length}
                    color="primary"
                    indeterminate={
                      selectedStaffIds.length > 0
                      && selectedStaffIds.length < staffAccess.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>
                Full name
                </TableCell>
                <TableCell>
                User name
                </TableCell>
                {/* <TableCell>
                Password
                </TableCell> */}
                {/* <TableCell>
                  Address
                </TableCell> */}
                <TableCell>
                Email
                </TableCell>
                <TableCell>
                  Mobile No
                </TableCell>
                {/* <TableCell>
                  UserRole
                </TableCell>
                <TableCell>
                  Access
                </TableCell>
                <TableCell>
                  Action
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {CoachAccess?.slice(0, limit).map((coaches) => (
                <TableRow
                  style={{cursor:"pointer"}}
                  onClick={()=>{
                    handleOpenCoachDetails(coaches)
                  }}
                  hover
                  key={coaches.ID}
                  // selected={selectedStaffIds.indexOf(coaches.ID) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedStaffIds.indexOf(coaches.id) !== -1}
                      onChange={(event) => handleSelectOne(event, coaches.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={coaches.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(coaches.FullName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {coaches.FullName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    {coaches.UserName}
                  </TableCell>

                  {/* <TableCell>
                    {coaches.password}
                  </TableCell> */}
                  
                  {/* <TableCell>
                    {`${coaches.address.street}, ${coaches.address.city}`}
                  </TableCell> */}
                  
                  <TableCell>
                    {coaches.EMail}
                  </TableCell>

                  <TableCell>
                    {coaches.MobileNo}
                  </TableCell>

                  {/* <TableCell>
                    {coaches.staffRole}
                  </TableCell>

                  <TableCell>
                    {coaches.staffAccess}
                  </TableCell>

                  <TableCell>
                    {coaches.action}
                  </TableCell> */}
                  
                  {/* <TableCell>
                    {format(coaches.createdAt, 'dd/MM/yyyy')}
                  </TableCell> */}  
        
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/* <TablePagination
        component="div"
        count={staffAccess.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

CoachListResult.propTypes = {
  staffAccess: PropTypes.array.isRequired
};
