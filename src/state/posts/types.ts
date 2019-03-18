import { AsyncAction } from '@state/types/actions';
import { Post } from '@models/posts';

export enum PostsActionName {
  GET_POSTS = 'GET_POSTS'
}

export interface GetPostsAction extends AsyncAction<PostsActionName.GET_POSTS, Post[]> {}

export type PostsAction = GetPostsAction;
