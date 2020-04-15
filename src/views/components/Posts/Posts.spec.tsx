import React from 'react';
import { render, mockData } from 'utils/test';
import Posts from './PostsContainer';
import api from 'services/api';
import { posts } from '__fixtures__/post';

const renderComponent = () => render(<Posts />);

describe('Posts', () => {
  it('fetches and renders posts', async () => {
    mockData(api, 'getPosts').mockResolvedValue({
      data: posts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const { getByTestId, findByTestId } = renderComponent();

    getByTestId('posts-loading');
    const items = await findByTestId('posts').then((el) => el.querySelectorAll('li'));
    expect(items).toHaveLength(4);
  });

  it('displays error if fetching posts fails', async () => {
    jest
      .spyOn(api, 'getPosts')
      .mockRejectedValue({ status: 404, response: { message: 'Not Found' } });

    const { getByTestId, findByTestId } = renderComponent();

    getByTestId('posts-loading');
    findByTestId('posts-error');
  });
});
