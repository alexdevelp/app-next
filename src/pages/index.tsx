import { GetServerSideProps } from 'next';
import SEO from '../components/SEO';
import { PostInterface } from '../interfaces/PostInterface';
interface HomeProps {
  posts: PostInterface[];
}

export default function Home({ posts }: HomeProps) {
  // Client Side Rendering (CSR)
  // todo código é gerado e interpretado pelo lado do cliente
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
      <SEO title="Home" excludeTitleSuffix />
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
//todo codigo é gerado no servidor node do next
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
