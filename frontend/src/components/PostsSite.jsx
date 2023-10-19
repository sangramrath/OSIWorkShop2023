import React from 'react';
import { Post } from './Post';
import { getPosts, getPostsIds } from '../service';
import { useRefresh } from './hooks';

export const PostsSite = () => {
    const [posts, setPosts] = React.useState();
    const needsUpdate = useRefresh(getPostsIds(posts));

    React.useEffect(() => {
        async function fetchData() {
            const results = await getPosts();
    
            setPosts(results.items);
        }

        fetchData();
    }, [needsUpdate]);

    if (!posts) {
        return <div>Loading Posts...</div>
    }

    return (
        <>
            {posts.length === 0 ? (
                <>No Post found</>
            ) : (
                <div>
                    {posts.map(post => (
                        <div key={post.id}>
                            <Post key={post.id} post={post} withLink={true} />

                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
