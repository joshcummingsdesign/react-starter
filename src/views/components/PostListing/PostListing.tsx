import React from 'react';
import { Post } from '@models/posts';
import PostCard from '@components/PostCard';

interface Props {
  posts: Post[];
  isLoading: boolean;
  errorMessage: string;
  onClick: () => void;
}

const PostListing = ({ posts, isLoading, errorMessage, onClick }: Props) => (
  <div className='h-mt-sm'>
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Load Posts'}
    </button>
    {errorMessage && <p>{errorMessage}</p>}
    {posts.map(post => (
      <PostCard key={post.id} {...post} />
    ))}
  </div>
);

export default PostListing;
