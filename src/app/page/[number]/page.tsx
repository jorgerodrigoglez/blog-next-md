
// idem que en posts/page
import { allPosts, Post} from "contentlayer/generated";
import { notFound } from "next/navigation";
import { PostsList } from "@/componets/PostsListjrg";
import { PaginationPosts } from "@/componets/PaginationPostsjrg";
import { getPagination } from '@/utils/Paginationjrg';


interface Props {
  params: {
    number: string;
  },

}
const posts:Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

// generateStaticParams
export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map( ( _, index ) => ({
    number: `${index + 1 }`,
  }))
}

const PageLayoutPagination = ( {params}: Props) => {

  let arrayCurrentPosts;
  let totalPagesNumber;

  try {
    const { currentPosts, totalPages } = getPagination( posts, 3 , params.number );
    arrayCurrentPosts = currentPosts;
    totalPagesNumber = totalPages;
  } catch (error) {
    notFound();
  }

  return (
    <div>
   
      <div className="grid gap-4">
        <PostsList posts={arrayCurrentPosts} />
        {
           totalPagesNumber > 1 && 
            <PaginationPosts 
              currentPage={parseInt(params.number)} 
              totalPages={totalPagesNumber} 
            />
        }
        
      </div>
    </div>
  )
}

export default PageLayoutPagination;
