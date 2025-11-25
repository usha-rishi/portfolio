import { resumeData } from '../../data/resume';

const initialState = resumeData;

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default resumeReducer;
