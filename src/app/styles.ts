import { style } from 'typestyle';

export const outer = style({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
});

export const side = style({
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
});

export const grow = style({
    flex: 1,
});

export const content = style({
    flex: 0,
});
