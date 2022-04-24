import { GetServerSideProps } from 'next';
import { PostInterface } from '../interfaces/PostInterface';
interface HomeProps {
  posts: PostInterface[];
}

export default function Home({ posts }: HomeProps) {
  // Client Side Rendering (CSR)
  // const [posts, setPosts] = useState<PostInterface[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:3333/posts').then(res => {
  //     res.json().then(data => {
  //       setPosts(data);
  //     });
  //   });
  // }, []);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

//Server Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
