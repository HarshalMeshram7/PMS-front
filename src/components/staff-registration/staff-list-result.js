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



export const StaffRegistrationListResults = ({ staffAccess,handleOpenStaffRegistrationDetails, ...rest }) => {
  const [selectedUserAccessIds, setSelectedUserAccessIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedUserAccessIds;

    if (event.target.checked) {
      newSelectedUserAccessIds = staffAccess.map((customer) => customer.id);
    } else {
      newSelectedUserAccessIds = [];
    }

    setSelectedUserAccessIds(newSelectedUserAccessIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUserAccessIds.indexOf(id);
    let newSelectedUserAccessIds = [];

    if (selectedIndex === -1) {
      newSelectedUserAccessIds = newSelectedUserAccessIds.concat(selectedUserAccessIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserAccessIds = newSelectedUserAccessIds.concat(selectedUserAccessIds.slice(1));
    } else if (selectedIndex === selectedUserAccessIds.length - 1) {
      newSelectedUserAccessIds = newSelectedUserAccessIds.concat(selectedUserAccessIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUserAccessIds = newSelectedUserAccessIds.concat(
        selectedUserAccessIds.slice(0, selectedIndex),
        selectedUserAccessIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserAccessIds(newSelectedUserAccessIds);
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
                    checked={selectedUserAccessIds.length === staffAccess.length}
                    color="primary"
                    indeterminate={
                      selectedUserAccessIds.length > 0
                      && selectedUserAccessIds.length < staffAccess.length
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
              {staffAccess?.slice(0, limit).map((staffs) => (
                <TableRow
                  style={{cursor:"pointer"}}
                  onClick={()=>{
                    handleOpenStaffRegistrationDetails(staffs)
                  }}
                  hover
                  key={staffs.ID}
                  // selected={selectedUserAccessIds.indexOf(staffs.ID) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUserAccessIds.indexOf(staffs.id) !== -1}
                      onChange={(event) => handleSelectOne(event, staffs.id)}
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
                        src={staffs.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(staffs.FullName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {staffs.FullName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    {staffs.UserName}
                  </TableCell>

                  {/* <TableCell>
                    {staffs.password}
                  </TableCell> */}
                  
                  {/* <TableCell>
                    {`${staffs.address.street}, ${staffs.address.city}`}
                  </TableCell> */}
                  
                  <TableCell>
                    {staffs.EMail}
                  </TableCell>

                  <TableCell>
                    {staffs.MobileNo}
                  </TableCell>

                  {/* <TableCell>
                    {staffs.staffRole}
                  </TableCell>

                  <TableCell>
                    {staffs.staffAccess}
                  </TableCell>

                  <TableCell>
                    {staffs.action}
                  </TableCell> */}
                  
                  {/* <TableCell>
                    {format(staffs.createdAt, 'dd/MM/yyyy')}
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

StaffRegistrationListResults.propTypes = {
  staffAccess: PropTypes.array.isRequired
};
