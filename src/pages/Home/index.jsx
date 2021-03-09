import { Component } from 'react';

import './styles.css';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

class Home extends Component {
	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postsPerPage: 6
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

	render() {
		const { posts, allPosts, page, postsPerPage } = this.state;
		const noMorePosts = (page + postsPerPage) >= allPosts.length;

		return (
			<section className="container">
				<Posts posts={posts} />
				<div className="button-container">
					<Button
						onClick={this.loadMorePosts}
						text="Load more posts"
						disabled={noMorePosts}
					/>
				</div>
			</section>
		);
	}
}

export default Home;
