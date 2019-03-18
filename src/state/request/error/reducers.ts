import { ErrorState } from '.';
import { RequestAction, RequestActionName } from '../types';

const error = (state = [] as ErrorState, action: RequestAction): ErrorState => {
  switch (action.type) {
    case RequestActionName.START_REQUEST: {
      return [
        ...state.filter(request => request.requestAction.type !== action.requestAction.type),
        {
          requestId: action.requestId,
          requestAction: action.requestAction,
          error: null
        }
      ];
    }

    case RequestActionName.FINISH_REQUEST: {
      if (action.error) {
        return state.map(request => {
          if (request.requestId !== action.requestId) {
            return request;
          }

          return {
            ...request,
            error: action.error
          };
        });
      }
      return state.filter(request => request.requestId !== action.requestId);
    }
  }

  return state;
};

export default error;
