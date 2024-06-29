import {useTranslation as useTranslationI18} from 'react-i18next';

const useTranslation = (page: string, section?: string) => {
  const {t} = useTranslationI18(page);

  const tCustom = (sectionInner: string) => t(`${section}.${sectionInner}`);

  return {t: tCustom};
};

export default useTranslation;
