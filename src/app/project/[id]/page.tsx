import { Post } from '@/types';

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
    if (!res.ok) return null;
    return res.json();
  });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
