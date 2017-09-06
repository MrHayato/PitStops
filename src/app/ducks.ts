import {Action} from 'redux';

const initialState = {
    stops: ['', ''],
};

enum Actions {
    AddStop = 'app/add-stop',
}

type IState = typeof initialState;

export const namespace = 'app';

export function addStop() {
    return {
        type: Actions.AddStop,
    };
}

export function reducer(state: IState = initialState, action: Action) {
    switch (action.type) {
        case Actions.AddStop:
            return {
                ...state,
                stops: [
                    ...state.stops,
                    '',
                ],
            };
    }

    return state;
}
