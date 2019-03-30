import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import posts from '@state/posts/reducers';
import { PostsState } from '@state/posts';
import { PostsAction } from '@state/posts/types';

import requests from '@state/requests/reducers';
import { RequestsState } from '@state/requests';
import { RequestsAction } from '@state/requests/types';

import auth from '@state/auth/reducers';
import { AuthState } from '@state/auth';
import { AuthAction } from '@state/auth/types';

import locale from '@state/locale/reducers';
import { LocaleState } from '@state/locale';
import { LocaleAction } from '@state/locale/types';

export const rootReducer = (history: History) =>
  combineReducers<RootState>({ posts, requests, auth, locale, router: connectRouter(history) });

export type RootState = {
  posts: PostsState;
  requests: RequestsState;
  auth: AuthState;
  locale: LocaleState;
  router: RouterState;
};

export type RootAction = PostsAction | RequestsAction | AuthAction | LocaleAction;
