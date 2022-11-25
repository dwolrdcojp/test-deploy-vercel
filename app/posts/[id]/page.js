// comment
import posts from '../../../data/posts';
const url = process.env.NEXT_PUBLIC_VERCEL_URL;

// Cannot call next api route from this function as it's not available before building
export async function generateStaticParams() {
  const allPosts = posts.result;

  const ids = allPosts.map((post) => ({
    id: post.id.toString()
  }));

  return ids;
}


function getPost(postid) {
  const selectedpost = posts.result.find(x => x.id === postid )
  return selectedpost;
}


export default async function Post({ params, searchParams }) {
  const { id } = params; 
  const post = getPost(id);

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
