// material-ui
import { Grid} from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo, useEffect } from 'react';

// assets
import ManPages from 'components/widget/Data/pages/manage_pages';

// ==============================|| FIELDS ||============================== //

const userRoleData = [
  'Admin',
  'Legal Manager',
  'Marketing Manager',
  'Finance Manager',
  'HR Manager',
  'Sales Representative',
  'Sales Manager'
];
const departementRole = ['Sales Manager', 'HR Manager', 'Marketing Manager', 'Finance Manager', 'Legal Manager', 'Sales Representative'];

// ==============================|| Add Company form ||============================== //
function ManagePages() {
  const theme = useTheme();
  const [userRole, setUserRole] = useState([]);
  const [departement, setDeparment] = useState([]);

  const handleDeparmentChange = (newValue) => {
    setDeparment(newValue);
  };
  const handleUserRoleChange = (newValue) => {
    setUserRole(newValue);
  };

  useEffect(() => {
    setUserRole(userRoleData);
    setDeparment(departementRole);
  }, []);

  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManPages />
        </Grid>
      </Grid>
    </Page>
  );
}

ManagePages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagePages;
