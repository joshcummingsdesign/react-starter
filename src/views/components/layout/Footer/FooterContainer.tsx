import React from 'react';
import LanguageSelectContainer from 'views/components/LanguageSelect/LanguageSelectContainer';
import Footer from '.';

const FooterContainer = () => <Footer renderLangaugeSelect={() => <LanguageSelectContainer />} />;

export default FooterContainer;
