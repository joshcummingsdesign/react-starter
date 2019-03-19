import React from 'react';
import { Post } from '@models/posts';

const PostCard = ({ title, body }: Partial<Post>) => (
  <div>
    <h4 className='h4'>{title}</h4>
    <p>{body}</p>
  </div>
);

export default PostCard;
