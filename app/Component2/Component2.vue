<template>
    <div>
        <p>component 2</p>

        <ul>
            <li>{{ t('Activation') }}</li>
            <li>{{ t('After the expiration') }}</li>
            <li>{{ t('Bonus accrual') }}</li>
            <li>{{ t('Calculation') }}</li>
            <li>{{ t('Collect') }}</li>
            <li>{{ t('Desc') }}</li>
            <li>{{ t('Each time') }}</li>
            <li>{{ t('If you change') }}</li>
            <li>{{ t('Important') }}</li>
            <li>{{ t('Interval settings') }}</li>
            <li>{{ t('list.1') }}</li>
            <li>{{ t('list.2') }}</li>
            <li>{{ t('list.3') }}</li>
            <li>{{ t('list.4') }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { t } = await useLangs((locale: string) => {
    return useAsyncData(() =>
        import(`./_/${locale}.json`).then((m) => m.default)
    );
});
</script>
