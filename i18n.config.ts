export default defineI18nConfig(async () => {
    return await $fetch('/api/languages');
})