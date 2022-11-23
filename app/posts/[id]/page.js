// comment
export async function generateStaticParams() {
  try {
    const response = await fetch('https://' + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/posts');
    const data = await response.json();
  }
  catch (error) {
    console.log('Error parsing JSON:', error, response);
  }

  const ids = data.posts.map((post) => ({
    id: post.id.toString()
  }));

  return ids;
}



async function getPost(id) {
  try {
    const response = await fetch('https://' + process.env.NEXT_PUBLIC_VERCEL_URL + `/api/post/${id}`);
    return response.json();
  }
  catch (error) {
    console.log('Error parsing JSON:', error, response);
  }
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
