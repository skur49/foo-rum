export type Post = {
  id: number;
  author: {
    name: string;
  };
  createdAt: number;
  reaction: string;
  data: string;
};
