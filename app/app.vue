<template>
    <header>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/langs">Langs</NuxtLink>
        </nav>

        <div class="lang-switcher">
            <button
                v-for="loc in supportedLocales"
                :key="loc"
                :disabled="locale === loc"
                @click="selectLocale(loc)"
            >
                {{ loc }}
            </button>
        </div>
    </header>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import localeConfig from '~/config/localeConfig';

const { locale } = useLocale();
const { supportedLocales } = localeConfig;
const userLocale = useCookie('locale');

useHead({
    htmlAttrs: {
        lang: locale,
    },
});

function selectLocale(selectedLocale) {
    userLocale.value = selectedLocale;

    window.location.reload();
}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
}

nav {
    display: flex;
    gap: 12px;
}

.lang-switcher {
    display: flex;
    gap: 12px;
}

button {
    border: none;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    background-color: #0c5eff;

    &:disabled {
        cursor: not-allowed;
        background-color: #19212c;
    }
}
</style>
