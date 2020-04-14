import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProps } from 'react-helmet';
import { defineMessages, useIntl } from 'react-intl';
import config from 'config';

export interface ISEO {
  title?: string;
  description?: string;
  meta?: HelmetProps['meta'];
}

const messages = defineMessages({
  title: {
    id: 'site.title',
    defaultMessage: 'React Starter',
  },
  description: {
    id: 'site.description',
    defaultMessage: 'A pleasant little starter project bootstrapped with Create React App.',
  },
});

const SEO = ({ title, description, meta }: ISEO) => {
  const intl = useIntl();
  const location = useLocation();

  const site = {
    url: `${config.url}${location.pathname}`,
    title: intl.formatMessage(messages.title),
    description: intl.formatMessage(messages.description),
    author: '@jcummingsdesign',
    image: 'https://reactjs.org/logo-og.png',
  };

  const metaTitle = title || site.title;
  const metaDescription = description || site.description;
  const metaData = meta ? meta : [];

  return (
    <Helmet
      htmlAttributes={{ lang: intl.locale }}
      title={metaTitle}
      titleTemplate={title ? `%s | ${site.title}` : '%s'}
      link={[
        { rel: 'alternate', hrefLang: intl.locale, href: site.url },
        { rel: 'canonical', href: site.url },
      ]}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:locale',
          content: intl.locale.replace('-', '_'),
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:image',
          content: site.image,
        },
        {
          property: 'og:image:secure_url',
          content: site.image,
        },
        {
          property: 'og:image:width:',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: site.url,
        },
        {
          property: 'og:site_name',
          content: site.title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:site',
          content: site.author,
        },
        {
          property: 'twitter:image',
          content: site.image,
        },
        {
          name: 'twitter:creator',
          content: site.author,
        },
        ...metaData,
      ]}
    />
  );
};

export default SEO;
