import { LoaderFunctionArgs, json } from '@remix-run/node';

import translationsEn from '../../src/translations/en.json';

const TRANSLATIONS_MAP = {
  en: translationsEn,
};

export async function loader({ params }: LoaderFunctionArgs) {
  const locale = params?.locale ?? 'en';

  return json(
    {
      messages: TRANSLATIONS_MAP[locale],
    },
    200,
  );
}
