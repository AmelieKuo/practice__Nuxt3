// GoogleSheetToJson.js
import { createRequire } from 'module';
import fs from 'fs-extra'
import { unflatten } from 'flat'
import * as path from 'path';
import { fileURLToPath } from 'url';
import googleMapToken from './google/nuxt3-i18n-423502-216dacba1527.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const { extractSheets } = require("spreadsheet-to-json");

extractSheets(
  {
    spreadsheetKey: '1pofcRh2hjS5nGWK2yNVkZUUlAPdCd1phuRx3R_iRvgM',
    credentials:  googleMapToken,
    sheetsToExtract: ['index','about'],
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data['index'], ...data['about']];
    const result = {};
    const files = [];
    
    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });

    for (const fileName of files) 
      {
        console.log(fileName);
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, "./language", `${fileName}.json`)
        )
      );
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      );
    }
  }
);
