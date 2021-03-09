import { Component } from 'react';

import './App.css';
import { Post } from './components/Post';

class App extends Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		this.loadPosts();
	}

	loadPosts = async () => {
		await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((posts) => this.setState({ posts }));
	};

	render() {
		const { posts } = this.state;

		return (
			<section className="container">
				<div className="posts">
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</section>
		);
	}
}

export default App;
