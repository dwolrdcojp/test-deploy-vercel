import posts from '../data/posts';
import Link from 'next/link';


const postsData = posts.result;

export default function Page() {
  const posts = postsData;
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
