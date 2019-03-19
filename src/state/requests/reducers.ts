import { RequestsState } from '.';
import { RequestsAction, RequestsActionName } from './types';

const requests = (state: RequestsState = [], action: RequestsAction): RequestsState => {
  switch (action.type) {
    case RequestsActionName.START_REQUEST: {
      return [
        ...state.filter(request => request.requestAction.type !== action.requestAction.type),
        {
          requestId: action.requestId,
          requestAction: action.requestAction
        }
      ];
    }

    case RequestsActionName.FINISH_REQUEST: {
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

export default requests;
