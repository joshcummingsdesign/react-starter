import { combineReducers } from 'redux';

import posts from '@state/posts/reducers';
import { PostsState } from '@state/posts';
import { PostsAction } from '@state/posts/types';

import requests from '@state/requests/reducers';
import { RequestsState } from '@state/requests';
import { RequestsAction } from '@state/requests/types';

import auth from '@state/auth/reducers';
import { AuthState } from '@state/auth';
import { AuthAction } from '@state/auth/types';

export const rootReducer = combineReducers<RootState>({ posts, requests, auth });

export type RootState = { posts: PostsState; requests: RequestsState; auth: AuthState };

export type RootAction = PostsAction | RequestsAction | AuthAction;
