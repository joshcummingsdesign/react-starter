import { LoadingState } from '.';
import { RequestAction, RequestActionName } from '../types';

const loading = (state = [] as LoadingState, action: RequestAction): LoadingState => {
  switch (action.type) {
    case RequestActionName.START_REQUEST: {
      return [
        ...state,
        {
          requestId: action.requestId,
          requestAction: action.requestAction
        }
      ];
    }

    case RequestActionName.FINISH_REQUEST: {
      return state.filter(request => request.requestId !== action.requestId);
    }
  }

  return state;
};

export default loading;
