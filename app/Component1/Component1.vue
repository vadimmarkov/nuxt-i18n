<template>
    <div>
        <br />
        <br />
        <div>
            <input v-model="text" />
        </div>

        <br />

        <p>component 1</p>
        <ul>
            <li>{{ t('Auto Mode', { text }) }}</li>
            <li>{{ t('Auto mode') }}</li>
            <li>{{ t('auto mode will') }}</li>
            <li>{{ t('bet for auto') }}</li>
            <li>{{ t('bet is the one') }}</li>
            <li>{{ t('Come up') }}</li>
            <li>{{ t('losing') }}</li>
            <li>{{ t('Note!') }}</li>
            <li>{{ t('percentage_loss') }}</li>
            <li>{{ t('percentage_win') }}</li>
            <li>{{ t('Save time') }}</li>
            <li>{{ t('Stop on loss') }}</li>
            <li>{{ t('Stop on profit') }}</li>
            <li>{{ t('stop the auto') }}</li>
            <li>{{ t('The') }}</li>
            <li>{{ t('the max bet') }}</li>
            <li>{{ t('the number of bets') }}</li>
            <li>{{ t('winning') }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { t } = await useLangs((locale: string) => {
    return useAsyncData(() =>
        import(`./_/${locale}.json`).then((m) => m.default)
    );
});

const text = ref('text');
const counter = ref(0);
</script>
