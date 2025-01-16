type asyncData = (locale: string) => Promise<{ data: Ref }>;

export default async function useLangs(asyncData: asyncData) {
    const { locale } = useLocale();
    const { data } = await asyncData(locale);

    const t = (key: string, params: Record<string, number | string> = {}) => {
        let str = data.value?.[key] || key;

        for (const param in params) {
            const pattern = new RegExp(`{${param}}`, 'g');

            str = str.replaceAll(pattern, params[param]);
        }

        return str;
    };

    return {
        t,
    };
}
