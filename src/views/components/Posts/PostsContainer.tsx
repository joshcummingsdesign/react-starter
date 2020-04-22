import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { Dispatch } from 'state/types/thunk';
import { RootState } from 'state/root';
import { getPosts } from 'state/post/actions';
import { PostActionName } from 'state/post/types';
import { loadingSelector, errorSelector } from 'state/requests/selectors';
import { ErrorKeys, translateError } from 'utils/error';
import Posts from '.';

const errorKeys: ErrorKeys = {};

const PostsContainer = () => {
  const intl = useIntl();
  const dispatch = useDispatch<Dispatch>();

  const { requests } = useSelector((state: RootState) => state);
  const isLoading = loadingSelector(requests, [PostActionName.GET_POSTS]);
  const error = errorSelector(requests, [PostActionName.GET_POSTS]);

  const { posts } = useSelector((state: RootState) => state.post);

  const _getPosts = useCallback(() => dispatch(getPosts()), [dispatch]);

  useEffect(() => {
    _getPosts();
  }, [_getPosts]);

  return (
    <Posts
      posts={posts}
      isLoading={isLoading}
      errorMessage={translateError(intl, errorKeys, error)}
    />
  );
};

export default PostsContainer;
