import React from 'react';
import { connect } from 'react-redux';
import { SRC } from '@state/types/redux';
import { changeLanguage } from '@state/locale/actions';
import { RootState } from '@src/state/root';

interface StateProps {
  lang: string;
}

const LanguageSelect: SRC<{}, StateProps> = ({ lang, dispatch }) => (
  <select value={lang} onChange={e => dispatch(changeLanguage(e.target.value))}>
    <option value='en'>English</option>
    <option value='es'>Español</option>
  </select>
);

const mapStateToProps = ({ locale: { lang } }: RootState): StateProps => ({
  lang
});

export default connect(mapStateToProps)(LanguageSelect);
