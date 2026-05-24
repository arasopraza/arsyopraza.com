import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '../config/config.json';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data, slug }) => {
    return !data.draft && slug !== '-index' && data.date;
  });
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/blog/${post.slug}`,
    })),
  });
}
