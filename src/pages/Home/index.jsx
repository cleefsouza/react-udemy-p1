import { Component } from 'react';

import './styles.css';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { InputSearch } from '../../components/InputSearch';

class Home extends Component {
	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postsPerPage: 6,
		searchValue: ''
	};

	componentDidMount() {
		this.loadPosts();
	}

	loadPosts = async () => {
		const { page, postsPerPage } = this.state;

		await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((posts) => this.setState({
				posts: posts.slice(page, postsPerPage),
				allPosts: posts
			}));
	};

	loadMorePosts = () => {
		const { posts, allPosts, page, postsPerPage } = this.state;

		const nextPage = page + postsPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

		posts.push(...nextPosts);

		this.setState({ posts, page: nextPage });
	}

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({ searchValue: value });
	}

	render() {
		const { posts, allPosts, page, postsPerPage, searchValue } = this.state;
		const noMorePosts = (page + postsPerPage) >= allPosts.length;

		const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts

		return (
			<section className="container">
				<div className="search-container">
					<InputSearch value={searchValue} onChange={this.handleChange} />

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
							onClick={this.loadMorePosts}
							text="Load more posts"
							disabled={noMorePosts}
						/>
					)}
				</div>
			</section>
		);
	}
}

export default Home;
