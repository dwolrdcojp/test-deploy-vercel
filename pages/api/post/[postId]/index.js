import posts from '../../../../data/posts';
// comment

export default async function handler(req, res) {
  const { postid } = req.query;
  const selectedpost = posts.result.find(x => x.id === postid )
  const { id, title, date } = selectedpost;
  res.status(200).json({ id, title, date });
}
