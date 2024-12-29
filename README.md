# Nuxt i18n dynamic locales issue explanation

The main goal I want to achieve is fetching locales setup from a DB.

I have the languages API endpoint [`languages.get.ts`](https://github.com/serhii-chernenko/nuxt-i18n-issue/blob/main/server/api/languages.get.ts):
```ts
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
```

The data is fetched in [`i18n.config.ts`](https://github.com/serhii-chernenko/nuxt-i18n-issue/blob/main/i18n.config.ts):
```ts
export default defineI18nConfig(async () => {
    return await $fetch('/api/languages');
})
```

The file is imported via [`nuxt.config.ts`](https://github.com/serhii-chernenko/nuxt-i18n-issue/blob/main/nuxt.config.ts):
```ts
export default defineNuxtConfig({
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    // locales: ['en', 'ua'],
  }
})
```

As a result, translations work as expected but `strategy: prefix` is not. `en` and `ua` locale code is not included to the URL. 
![image](https://github.com/user-attachments/assets/7832c9ea-d94b-40ea-a565-59c7ea80206b)
![image](https://github.com/user-attachments/assets/64414a9e-d05a-4d67-9893-b939019f6256)

The only way I found to fix it, just add:
```ts
locales: ['en', 'ua'],
```
to the [`nuxt.config.ts`](https://github.com/serhii-chernenko/nuxt-i18n-issue/blob/main/nuxt.config.ts#L13):
![image](https://github.com/user-attachments/assets/1cd04086-908c-491a-897b-6dd12d6dbfca)
![image](https://github.com/user-attachments/assets/0ba93dee-d130-4717-9350-e986ea0602d4)

But it doesn't make sense because it's still hardcoded anyway. I want to make `strategy: prefix` working when the whole functionality is dynamic and fetched from the API endpoint (from DB in general).

