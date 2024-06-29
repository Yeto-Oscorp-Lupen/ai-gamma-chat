import {useCallback} from 'react';
import {useTranslation as useTranslationI18} from 'react-i18next';

const useTranslation = (page: string, section?: string) => {
  const {t} = useTranslationI18(page);

  const tCustom = useCallback(
    (sectionInner: string) =>
      t(section ? `${section}.${sectionInner}` : `${sectionInner}`),
    [page, section],
  );

  return {t: tCustom};
};

export default useTranslation;
