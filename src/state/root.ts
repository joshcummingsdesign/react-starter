import { combineReducers } from 'redux';

import post from 'state/post/reducers';
import { PostState } from 'state/post';
import { PostAction } from 'state/post/types';

import requests from 'state/requests/reducers';
import { RequestsState } from 'state/requests';
import { RequestsAction } from 'state/requests/types';

import settings from 'state/settings/reducers';
import { SettingsState } from 'state/settings';
import { SettingsAction } from 'state/settings/types';

export const rootReducer = combineReducers<RootState>({ post, requests, settings });

export type RootState = {
  post: PostState;
  requests: RequestsState;
  settings: SettingsState;
};

export type RootAction = PostAction | RequestsAction | SettingsAction;
