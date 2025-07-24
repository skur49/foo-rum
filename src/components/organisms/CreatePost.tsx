// libraries
import { useCallback, useState } from "react";
import {
  Bold,
  ChevronDown,
  Code,
  Italic,
  List,
  ListOrdered,
  Mic,
  Plus,
  Quote,
  SendHorizonal,
  Smile,
  Trash2,
  Underline,
  Video,
} from "lucide-react";

// hooks
import { useAuth } from "../../hooks/useAuth";

type CreatePostProps = {
  onOpenAuthModal: () => void;
  onPublishPost: (value: string) => void;
};

export const CreatePost = ({
  onOpenAuthModal,
  onPublishPost,
}: CreatePostProps) => {
  const { isLoggedIn } = useAuth();

  const [postData, setPostData] = useState("");

  const handlePostDataChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPostData(e.target.value);
    },
    []
  );

  const handleInteraction = useCallback(() => {
    if (isLoggedIn) {
      alert("Function not implemented");
    } else {
      onOpenAuthModal();
    }
  }, [isLoggedIn, onOpenAuthModal]);

  const handleClearPost = useCallback(() => {
    setPostData("");
  }, []);

  const handlePublish = useCallback(() => {
    if (isLoggedIn) {
      onPublishPost(postData);
      setPostData("");
    } else {
      onOpenAuthModal();
    }
  }, [isLoggedIn, onPublishPost, postData, onOpenAuthModal]);

  return (
    <div className="w-full h-56 p-2 bg-gray-100 rounded-2xl">
      <div className="flex flex-col w-full h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="flex items-center justify-between w-full p-2">
          <div className="flex items-center h-10 pr-4 pl-1 py-1 bg-gray-100 gap-x-0.5 rounded-lg">
            <button
              className="flex items-center justify-center h-8 px-2 space-x-2 bg-white rounded-md shadow-sm w-max"
              onClick={handleInteraction}
            >
              <span className="text-xs font-medium">Paragraph</span>
              <ChevronDown className="w-3 h-3 text-gray-800" />
            </button>
            <div className="w-px h-full mx-1 bg-transparent" />
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <Bold className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <Italic className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <Underline className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <div className="w-px h-full mx-2 bg-gray-300" />
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <List className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <ListOrdered className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <div className="w-px h-full mx-2 bg-gray-300" />
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <Quote className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md group hover:bg-white hover:shadow-sm"
              onClick={handleInteraction}
            >
              <Code className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 transition-all bg-red-100 border border-red-100 rounded-lg hover:border-red-300 hover:shadow-sm"
            onClick={handleClearPost}
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
        <div className="flex flex-1 px-2 py-1 space-x-2">
          <Smile className="w-5 h-5 text-gray-700" />
          <textarea
            className="w-full h-full overflow-y-auto text-sm font-medium text-gray-800 outline-none"
            placeholder="How are you feeling today?"
            value={postData}
            rows={4}
            onChange={handlePostDataChange}
          />
        </div>
        <div className="flex items-center justify-between w-full p-2 border-t border-t-gray-200">
          <div className="flex items-center space-x-2">
            <button
              className="flex items-center justify-center w-6 h-6 bg-white rounded-md hover:bg-gray-200 group"
              onClick={handleInteraction}
            >
              <Plus className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 bg-white rounded-md hover:bg-gray-200 group"
              onClick={handleInteraction}
            >
              <Mic className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 bg-white rounded-md hover:bg-gray-200 group"
              onClick={handleInteraction}
            >
              <Video className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
            </button>
          </div>
          <button
            className="flex items-center justify-center px-2 group disabled:cursor-not-allowed"
            onClick={handlePublish}
            disabled={!postData.length}
          >
            <SendHorizonal className="w-5 h-5 text-primary group-hover:opacity-75 group-disabled:opacity-75" />
          </button>
        </div>
      </div>
    </div>
  );
};
