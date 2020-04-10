import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Post } from 'models/Post';

interface IPosts {
  posts: Post[];
  isLoading?: boolean;
  errorMessage?: string;
}

const Posts = (props: IPosts) => (
  <div>
    <h3>
      <FormattedMessage id='posts.heading' defaultMessage='Posts' />
    </h3>
    <PostsContent {...props} />
  </div>
);

const PostsContent = ({ posts, isLoading, errorMessage }: IPosts) => {
  if (errorMessage) {
    return <p data-testid='posts-error'>{errorMessage}</p>;
  } else if (isLoading) {
    return (
      <p data-testid='posts-loading'>
        <FormattedMessage id='posts.loading' defaultMessage='Loading…' />
      </p>
    );
  }
  return (
    <ul data-testid='posts'>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
