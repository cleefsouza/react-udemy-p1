import { Component } from 'react';

import './App.css';

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
						<div key={post.id} className="post">
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default App;
