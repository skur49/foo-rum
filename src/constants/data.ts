import type { Post } from "../types/post.types";

export const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Vecna",
    },
    createdAt: 1753314383,
    reaction: "😈",
    data: "Found you",
  },
  {
    id: 2,
    author: {
      name: "Steve",
    },
    createdAt: 1753314383,
    reaction: "😎",
    data: "Okay, okay, I get it. It’s weird. It’s dangerous. But you know what? I’ve got your back. I’m not gonna let some weird creature or government agency—or whatever the hell this is—drag us down. I’ve been through my own share of crap, but I’ve learned a thing or two. First thing’s first: stay calm. Second thing: we survive. Together. And don’t think for a second I’m going to let anyone mess with my friends.",
  },
  {
    id: 3,
    author: {
      name: "Dustin",
    },
    createdAt: 1753314383,
    reaction: "😀",
    data: "I mean, look, I know we’re in the middle of something way bigger than us, but we can’t just give up. This is the kind of stuff we do—just like when we defeated the Demogorgon! We make our own fate, okay? We fight until the end, and I’m not going to let whatever this is stop us. And if we do need to build a trap to catch it, well, I’m your guy. You know I can handle a few wires, a walkie-talkie, and some imagination, right?",
  },
  {
    id: 4,
    author: {
      name: "Mike",
    },
    createdAt: 1753313749,
    reaction: "🤔",
    data: "Look, I don’t know how much clearer I can be about this: we’re a team. We’ve been through so much together, and I’m not going to let anything tear us apart. Not now, not ever. Whatever’s going on, we face it together—because that’s what friends do. And I know, I know it’s hard, but trust me, we can figure this out. We always do.",
  },
];
