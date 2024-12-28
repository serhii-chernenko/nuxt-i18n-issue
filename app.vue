<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <button
        type="button"
        :title="switchToLocale.name"
        @click="setLocale(switchToLocale.code)"
    >
        {{ switchToLocale.name }}
    </button> -->
    <!-- <p>{{ $t('welcome') }}</p> -->
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
// I use setLocale here instead of the example:
// https://i18n.nuxtjs.org/docs/guide/lang-switcher
// Because useSwitchLocalePath doesn't work on pages with defineI18nRoute(false)
// like /customer or /admin

const { locale, locales, setLocale } = useI18n()

console.log('locales', locales)

// const switchToLocale = computed(() => {
//     return locales.value.filter(i => i.code !== locale.value)[0]
// })
</script>
