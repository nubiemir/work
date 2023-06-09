// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const propertyhub = {
  id: 'ui-forms',
  title: <FormattedMessage id="Property Hub" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'components',
      title: <FormattedMessage id="Add Property" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/propery_hub/add_property'
    },
    {
      id: 'properties',
      title: <FormattedMessage id="Manage Properties" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'local-properties',
          title: <FormattedMessage id="Local Properties" />,
          type: 'item',
          url: '/property_hub/local_properties'
        },
        {
          id: 'international-properties',
          title: <FormattedMessage id="International Properties" />,
          type: 'item',
          url: '/property_hub/international_properties'
        },
        {
          id: 'shared-properties',
          title: <FormattedMessage id="Shared Properties" />,
          type: 'item',
          url: '/property_hub/shared_properties'
        }
      ]
    },
    {
      id: 'deleted-properties',
      title: <FormattedMessage id="Deleted Properties" />,
      type: 'item',
      icon: icons.IconForms,
      url: '/property_hub/deleted_properties'
    },
    {
      id: 'property-hub-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconForms,
      url: '/property_hub/activities'
    }
  ]
};

export default propertyhub;
