import { Post } from "contentlayer/generated";
import { PostItem } from "./PostItem";

interface Props {
    posts : Post[];
}

export const PostsList = ( {posts}: Props ) => {

  return (
      <>
        {
            posts.map( (post) => (
                <PostItem post={post} key={post._raw.flattenedPath}/>
            ))
            
        }
      </>
  )
}
