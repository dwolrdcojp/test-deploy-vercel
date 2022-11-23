import posts from '../../data/posts';
//comment

export default async function handler(req, res) {
  res.status(200).json({ posts: posts.result });
}
