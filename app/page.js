import Link from 'next/link';


async function getPosts() {
  const response = await fetch(process.env.BASE_URL + '/api/posts');
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
