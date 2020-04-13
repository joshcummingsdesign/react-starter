import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import BaseLayout from 'views/components/layout/BaseLayout';
import PageNotFound from '.';

const messages = defineMessages({
  title: {
    id: 'pageNotFound.title',
    defaultMessage: 'Page Not Found',
  },
});

const PageNotFoundContainer = () => {
  const intl = useIntl();
  return (
    <BaseLayout title={intl.formatMessage(messages.title)}>
      <PageNotFound />
    </BaseLayout>
  );
};

export default PageNotFoundContainer;
