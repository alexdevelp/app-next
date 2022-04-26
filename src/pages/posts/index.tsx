import { GetStaticProps } from 'next';
import SEO from '../../components/SEO';

interface IPosts {
  id: string;
  title: string;
}

interface PostProps {
  posts: IPosts[];
}

export default function Posts({ posts }: PostProps) {
  return (
    <div>
      <SEO title="Posts" />
      <h1>Listagem de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

//Satic Site Generation (SSG)
//todo codigo é gerado pela build, tudo estatico (HTML,CSS)
export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  return {
    props: {
      posts,
    },
    revalidate: 5, //in seconds
  };
};
