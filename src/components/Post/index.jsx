export const Post = ({ post }) => (
    <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
);
