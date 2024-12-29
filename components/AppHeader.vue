<template>
    <ul>
        <li>
            <NuxtLinkLocale to="/">{{ $t('home') }}</NuxtLinkLocale>
        </li>
        <li>
            <NuxtLinkLocale to="/about">{{ $t('about') }}</NuxtLinkLocale>
        </li>
    </ul>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('ua')">ua</button>
  </template>

<script setup>
const { setLocale } = useI18n()
const localePath = useLocalePath()
</script>