import React from 'react';
import { ReduxComponent } from '@state/types/redux';
import { IntlProvider, addLocaleData, LocaleData } from 'react-intl';
import { connect } from 'react-redux';
import { RootState } from '@src/state/root';
import languages from '@src/locale/localeData/data.json';

interface StateProps {
  lang: string;
}

export enum Languages {
  en = 'en',
  es = 'es'
}

// Add localeData
const localeData: LocaleData = [];
Object.keys(Languages).forEach(lang => {
  console.log(lang);
  localeData.push(...require(`react-intl/locale-data/${lang}`));
});
addLocaleData(localeData);

class LocaleProvider extends ReduxComponent<{}, StateProps> {
  render() {
    const { lang, children } = this.props;
    return (
      <IntlProvider locale={lang} messages={(languages as any)[lang]}>
        {children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ locale: { lang } }: RootState): StateProps => ({
  lang
});

export default connect(mapStateToProps)(LocaleProvider);
