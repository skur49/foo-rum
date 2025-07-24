// libraries
import { useCallback } from "react";
import { CircleUser, Heart, MessageCircle, Send } from "lucide-react";

// hooks
import { useAuth } from "../../hooks/useAuth";

// utils
import { timeAgo } from "../../utils/time";

// types
import type { Post } from "../../types/post.types";

type FeedPostProps = {
  post: Post;
  onOpenAuthModal: () => void;
};

export const FeedPost = ({ post, onOpenAuthModal }: FeedPostProps) => {
  const { isLoggedIn } = useAuth();

  const handleInteraction = useCallback(() => {
    if (isLoggedIn) {
      alert("Function not implemented");
    } else {
      onOpenAuthModal();
    }
  }, [isLoggedIn, onOpenAuthModal]);

  return (
    <div className="w-full h-auto p-2 bg-gray-100 rounded-2xl">
      <div className="w-full h-auto px-2 pt-2 pb-4 bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="flex items-center mb-2 space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg">
            <CircleUser className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700">
              {post.author.name}
            </span>
            <span className="text-xs text-gray-500">
              {timeAgo(post.createdAt * 1000)}
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center justify-center h-10 min-w-10">
            <div className="flex items-center justify-center w-8 h-8 text-lg text-center bg-gray-100 rounded-full">
              {post.reaction}
            </div>
          </div>
          <div className="max-w-md text-sm font-medium text-gray-800 break-words whitespace-pre-wrap">
            {post.data}
          </div>
        </div>
      </div>
      <div className="flex items-center px-3 pt-2.5 pb-1 space-x-6">
        <button onClick={handleInteraction}>
          <Heart className="w-4 h-4 text-gray-800" />
        </button>
        <button onClick={handleInteraction}>
          <MessageCircle className="w-4 h-4 text-gray-800" />
        </button>
        <button onClick={handleInteraction}>
          <Send className="w-4 h-4 text-gray-800" />
        </button>
      </div>
    </div>
  );
};
