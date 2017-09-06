import { normalize, setupPage } from 'csstips';
import { cssRaw, cssRule } from 'typestyle';

cssRaw(`
@import url('https://fonts.googleapis.com/css?family=Syncopate:700');
`);

normalize();
setupPage('#app-container');

export const baseStyle = cssRule('body', {
    color: '#474747',
});
