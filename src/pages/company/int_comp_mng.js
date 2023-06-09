// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import InterComp from 'components/widget/Data/company/international_comp_datatable';
import MainCard from 'components/ui-component/cards/MainCard';

// ===========================|| International Company Managment list||=========================== //

const IntCompData = () => (
  <Page title="International Company List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title="International Companies">
          <InterComp />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
