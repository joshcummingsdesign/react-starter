import { combineReducers } from 'redux';

import requests from '@state/requests/reducers';
import { RequestsState } from '@state/requests';
import { RequestsAction } from '@state/requests/types';

import posts from '@state/posts/reducers';
import { PostsState } from '@state/posts';
import { PostsAction } from '@state/posts/types';

export const rootReducer = combineReducers<RootState>({ requests, posts });

export type RootState = { requests: RequestsState; posts: PostsState };

export type RootAction = RequestsAction | PostsAction;
