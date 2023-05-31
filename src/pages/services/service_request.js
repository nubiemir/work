// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

// ==============================|| Activities Project ||============================== //
function ServiceRequest() {
  return (
    <Page title=" Service Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}
ServiceRequest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ServiceRequest;

