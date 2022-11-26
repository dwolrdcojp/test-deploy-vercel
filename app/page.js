import posts from '../data/posts';
import Link from 'next/link';

const url = process.env.NEXT_PUBLIC_VERCEL_URL;

function getPosts() {
  const allPosts = posts.result;

  const ids = allPosts.map((post) => ({
    id: post.id.toString()
  }));

  return ids;
}

export default function Page() {
  const posts = getPosts();
  return ( <div>
      <h1>Hello, Next.js!</h1>
      <br />
      <h1> Posts </h1>
      {posts.map(({ id, title, date}) => (
        <li key={id}>
          <Link href={`/posts/${id}`}> {title} </Link>
          <p> {date} </p>
        </li>
      ))}
          
    
    </div>
  );
}
