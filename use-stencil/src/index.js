import { defineCustomElements, setAssetPath } from 'step3/dist/custom-elements';

setAssetPath(document.currentScript.src);
defineCustomElements();
