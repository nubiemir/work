// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import DelPro from 'components/widget/Data/add_project/del_pro_datatable';

// ==============================|| Manage International Project ||============================== //
function ManageProject() {
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <DelPro />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
