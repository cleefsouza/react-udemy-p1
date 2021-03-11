import React, { useCallback, useEffect, useState } from 'react';

import { Button } from '../../components/Button';
import { InputSearch } from '../../components/InputSearch';
import { Posts } from '../../components/Posts';
import './styles.css';


export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = (page + postsPerPage) >= allPosts.length;
  const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts

  const loadPosts = useCallback(
    async (page, postsPerPage) => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts.slice(page, postsPerPage));
          setAllPosts(posts);
        });
    }, []
  );

  useEffect(() => {
    loadPosts(0, postsPerPage);
  }, [loadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <section className="container">
      <div className="search-container">
        <InputSearch value={searchValue} onChange={handleChange} />

        {!!searchValue && (
          <div className="searche-value">
            <label>Search value: </label><span><i>{searchValue}</i></span>
          </div>
        )}
      </div>

      <Posts posts={filteredPosts} />

      <div className="button-container">
        {!searchValue && (
          <Button
            onClick={loadMorePosts}
            text="Load more posts"
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
}