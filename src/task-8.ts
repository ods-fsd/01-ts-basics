import axios from "axios";

interface Post {
    id: number;
  title: string;
  body: string;
}
async function fetchPostsTyped() : Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPostsTyped().then((posts) => {
  console.log(posts[0].title);
});