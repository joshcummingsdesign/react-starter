import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '@state/root';
import { Post } from '@models/posts';
import { ReduxComponent } from '@state/types/redux';
import { PostsActionName } from '@state/posts/types';
import { loadingSelector, errorSelector } from '@state/requests/selectors';
import { getPosts } from '@state/posts/actions';
import PostListing from '.';

interface StateProps {
  posts: Post[];
  isLoading: boolean;
  errorMessage: string;
}

class PostsContainer extends ReduxComponent<StateProps> {
  render() {
    const { posts, isLoading, errorMessage } = this.props;
    return (
      <PostListing
        posts={posts}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onClick={this.handleClick}
      />
    );
  }

  private handleClick = () => this.props.dispatch(getPosts());
}

const mapStateToProps = ({ posts, requests }: RootState): StateProps => ({
  posts,
  isLoading: loadingSelector(requests, [PostsActionName.GET_POSTS]),
  errorMessage: errorSelector(requests, [PostsActionName.GET_POSTS])
});

export default connect(mapStateToProps)(PostsContainer);
