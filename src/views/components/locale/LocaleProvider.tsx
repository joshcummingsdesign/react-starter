import React from 'react';
import { ReduxComponent } from '@state/types/redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import { RootState } from '@src/state/root';
import localeData from '@src/locale/localeData/data.json';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);

interface StateProps {
  lang: string;
}

class LocaleProvider extends ReduxComponent<{}, StateProps> {
  render() {
    const { lang, children } = this.props;
    return (
      <IntlProvider locale={lang} messages={(localeData as any)[lang]}>
        {children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ locale: { lang } }: RootState): StateProps => ({
  lang
});

export default connect(mapStateToProps)(LocaleProvider);
