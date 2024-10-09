import { param } from "express/lib/request";

export async function generateStaticParams() {
  const posts = await fetch("http://localhost:3000/api/content").then((res) => {
    console.log("API CALL >>>", res);
    return res.json();
  });
  // console.log(">>>", posts);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  // console.log(">>>", params);
  const posts = await fetch("http://localhost:3000/api/content").then((res) => {
    // console.log("API CALL >>>", res);
    return res.json();
  });
  // console.log(">>>", posts);
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
