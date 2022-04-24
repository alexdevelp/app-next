import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
interface IComment {
  id: string;
  body: string;
}

interface ICommenstProps {
  comments: IComment[];
}
export default function Post({ comments }: ICommenstProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Aguardando...</p>;
  }
  return (
    <>
      <h1>Comentários do post {router.query.id}</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}
// Usamos esse método para criar paginas estaticas quando precisamos passar algum parametro
// return quando ja sabemos e temos um numero de posts baixo: paths(constante), fallback: false
// neste exemplo o next cria as paginas estaticas para cada posts existentes
// caso tenhamos um numero expressivo de posts, por exemplo 5 mil
// não podemos perder tempo com a build criando todoas as 5 mil paginas, o que torna dinamico o conteudo
// para isso o retorno precisa mudar: params: [], fallback: true
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3333/posts`);
  const posts = await response.json();

  const paths = posts.map(post => {
    return {
      params: { id: String(post.id) },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

//Satic Site Generation (SSG)
//todo codigo é gerado pela build, tudo estatico (HTML,CSS)
//usando revalidate para ser gerado um novo conteudo a cada 5 secundos, por exemplo
export const getStaticProps: GetStaticProps<ICommenstProps> = async context => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments = await response.json();
  return {
    props: {
      comments,
    },
    revalidate: 5, //in seconds
  };
};
