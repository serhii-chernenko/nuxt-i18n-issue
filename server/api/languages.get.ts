export default defineEventHandler(() => {
  return {
    fallbackLocale: 'en',
    locales: [
        { code: 'en', name: 'English' },
        { code: 'ua', name: 'Ukrainian' }
    ],
    messages: {
        en: {
          home: 'Home',
          about: 'About Us'
        },
        ua: {
          home: 'Головна',
          about: 'Про нас'
        }
    },
  };
});
