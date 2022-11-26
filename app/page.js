import Link from 'next/link';
// comment


const url = process.env.NEXT_PUBLIC_VERCEL_URL;

async function getPosts() {
  const response = await fetch(url + '/api/posts', { cache: 'no-store'});
  const data = await response.json();

  return data.posts;
}

export default async function Page() {
  const posts = await getPosts();
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
