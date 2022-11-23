// comment
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

export async function generateStaticParams() {
    const response = await fetch(url + '/api/posts');
    const data = await response.json();

  const ids = data.posts.map((post) => ({
    id: post.id.toString()
  }));

  return ids;
}



async function getPost(id) {
    const response = await fetch(url + `/api/post/${id}`);
    return response.json();
}

export default async function Post({ params, searchParams }) {
  const { id } = params; 
  const post = await getPost(id);

  return (
    <>
      <h1> Blog Post Page </h1>
      ========================================================
      <h1> Params: {params.id}</h1>
      <h1> Search Params: {searchParams.search}</h1>
      =========================================================
      <h1> Id: {post.id} </h1> 
      <h1> Title: {post.title} </h1>
      <h1> Date: {post.date} </h1>
    </>
  );
}
