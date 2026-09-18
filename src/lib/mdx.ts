import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

const contentDir = path.join(process.cwd(), 'src/content/blog');

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        category: data.category,
        description: data.description,
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    description: data.description,
    content,
  };
}
