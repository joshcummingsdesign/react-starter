import { AsyncAction } from 'state/types/actions';
import { Post } from 'models/Post';

export enum PostActionName {
  GET_POSTS = 'GET_POSTS',
}

export interface GetPostsAction extends AsyncAction<PostActionName.GET_POSTS, Post[]> {}

export type PostAction = GetPostsAction;
