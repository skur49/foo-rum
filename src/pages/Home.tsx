// libraries
import { useCallback, useState } from "react";

// components
import { AuthModal } from "../components/organisms/AuthModal";
import { FeedPost } from "../components/molecules/FeedPost";
import { CreatePost } from "../components/organisms/CreatePost";

// constants
import { mockPosts } from "../constants/data";

// types
import type { Post } from "../types/post.types";

export const Home = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  const handleAddNewPost = useCallback(
    (postData: string) => {
      const newPosts = [...posts];

      const newPost: Post = {
        id: posts.length + 1,
        author: {
          name: "Vecna",
        },
        createdAt: Date.now() / 1000,
        reaction: "😈",
        data: postData,
      };

      newPosts.unshift(newPost);

      setPosts(newPosts);
    },
    [posts]
  );

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-[36rem] space-y-5">
          <CreatePost
            onOpenAuthModal={toggleAuthModal}
            onPublishPost={handleAddNewPost}
          />
          {posts.map((post) => (
            <FeedPost
              key={post.id}
              post={post}
              onOpenAuthModal={toggleAuthModal}
            />
          ))}
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
    </>
  );
};

export default Home;
