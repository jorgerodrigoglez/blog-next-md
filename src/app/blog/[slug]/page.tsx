import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import ButtonBack from "@/componets/ButtonBackjrg";


interface Props {
    params: {
        slug : string;
    };
};

// generateStaticParams
export const generateStaticParams = () => {
    /*return [
        {
            slug: "01-blog"
        },
        {
            slug: "02-blog"
        },
        {
            slug: "03-blog"
        },
    ]*/

    return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export const generateMetadata = ({ params }: Props) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
    return {
      title: post?.title,
      description: post?.description,
    };
  };

const PostLayout = ( {params} : Props ) => {

    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
    //console.log(post);

    let MDXContent;
    if(!post){
        //return <p>El post no existe</p>
        notFound();
    } else {
        MDXContent = getMDXComponent(post.body.code);
    }

  return (
    <>
        <h1 className="text-center text-2xl font-bold uppercase">{post.title}</h1>
        <div className="mb-8 text-center">
            <time className="text-gray-700">
            {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
            </time>
        </div>

        <MDXContent />

        <div className="mt-8 text-center">
            <ButtonBack>Volver</ButtonBack>
        </div>
    </>
  )
}

export default PostLayout;