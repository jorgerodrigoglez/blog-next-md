import { allPosts, Post } from "contentlayer/generated";
import { PostsList } from "@/componets/PostsListjrg";
import { PaginationPosts } from "@/componets/PaginationPostsjrg";
import { getPagination } from '@/utils/Paginationjrg';

// const posts:Post[] = allPosts;
//console.log(allPosts[0].title);
const posts:Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));


const Posts = () => {

  const { currentPosts, totalPages } = getPagination( posts );

  return (
 
      <div className="grid gap-4">
        {/*<PostsList posts={currentPosts} />*/}
        <PostsList posts={currentPosts} />
        {
          totalPages > 1 && <PaginationPosts totalPages={totalPages}/>
        }
      </div>
  
  );
};

export default Posts;