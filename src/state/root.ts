import { combineReducers } from 'redux';

import request from '@state/request/reducers';
import { RequestState } from '@state/request';
import { RequestAction } from '@state/request/types';

import posts from '@state/posts/reducers';
import { PostsState } from '@state/posts';
import { PostsAction } from '@state/posts/types';

export const rootReducer = combineReducers<RootState>({ request, posts });

export type RootState = { request: RequestState; posts: PostsState };

export type RootAction = RequestAction | PostsAction;
