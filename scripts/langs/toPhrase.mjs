import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { allEnLocales, mainEnFile, strToHash } from './config.mjs';

const allEnKeys = {};

globSync(allEnLocales).forEach((filePath) => {
    const enData = JSON.parse(readFileSync(filePath, 'utf8'));

    for (const key in enData) {
        allEnKeys[strToHash(enData[key])] = enData[key];
    }
});

writeFileSync(mainEnFile, JSON.stringify(allEnKeys, null, 4));
