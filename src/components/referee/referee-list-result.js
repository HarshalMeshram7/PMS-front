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



export const RefereeListResults = ({ staffAccess,handleOpenStaffRegistrationDetails, ...rest }) => {
  const [selectedRefereeIds, setSelectedRefereeIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const handleSelectAll = (event) => {

  
    let newSelectedRefereeIds;


    if (event.target.checked) {
      newSelectedRefereeIds = staffAccess.map((customer) => customer.id);
    } else {
      newSelectedRefereeIds = [];
    }

    setSelectedRefereeIds(newSelectedRefereeIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRefereeIds.indexOf(id);
    let newSelectedRefereeIds = [];

    if (selectedIndex === -1) {
      newSelectedRefereeIds = newSelectedRefereeIds.concat(selectedRefereeIds, id);
    } else if (selectedIndex === 0) {
      newSelectedRefereeIds = newSelectedRefereeIds.concat(selectedRefereeIds.slice(1));
    } else if (selectedIndex === selectedRefereeIds.length - 1) {
      newSelectedRefereeIds = newSelectedRefereeIds.concat(selectedRefereeIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRefereeIds = newSelectedRefereeIds.concat(
        selectedRefereeIds.slice(0, selectedIndex),
        selectedRefereeIds.slice(selectedIndex + 1)
      );
    }

    setSelectedRefereeIds(newSelectedRefereeIds);
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
                    checked={selectedRefereeIds.length === staffAccess.length}
                    color="primary"
                    indeterminate={
                      selectedRefereeIds.length > 0
                      && selectedRefereeIds.length < staffAccess.length
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
                  // selected={selectedRefereeIds.indexOf(staffs.ID) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRefereeIds.indexOf(staffs.id) !== -1}
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

RefereeListResults.propTypes = {
  staffAccess: PropTypes.array.isRequired
};
