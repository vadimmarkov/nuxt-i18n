import {
    addImportsDir,
    defineNuxtModule,
    addServerHandler,
    createResolver,
    addPlugin,
} from '@nuxt/kit';

export default defineNuxtModule({
    async setup() {
        const resolver = createResolver(import.meta.url);

        addImportsDir(resolver.resolve('./runtime/composables'));

        addPlugin({
            src: resolver.resolve('./runtime/plugins/provide-locale'),
            name: 'provide-locale',
            order: 1,
        });

        addServerHandler({
            handler: resolver.resolve(
                './runtime/server/middleware/auto-detect-locale'
            ),
        });
    },
});
