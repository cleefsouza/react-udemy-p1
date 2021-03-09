import './styles.css';

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <h1>{post.title}</h1>
                <br />
                <p>{post.body}</p>
            </div>
        ))}
    </div>
);
