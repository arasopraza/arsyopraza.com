import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Experiences collection schema
const experiencesCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    company: z.string().max(100),
    duration: z.string().max(50),
    icon: z.string(),
    description: z.string().max(1000).optional(),
    order: z.number().int().min(1),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(500),
    link: z.string().url(),
    technologies: z.array(z.string().max(50)).max(20).optional(),
    featured: z.boolean().default(false),
  }),
});

// Certifications collection schema
const certificationsCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    icon: z.string(),
    organization: z.string().max(100).optional(),
    credential_url: z.string().url().optional(),
  }),
});

// Talks collection schema
const talksCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(1000),
    event_name: z.string().max(100),
    date: z.date().optional(),
    image: z.string(),
    slides_url: z.string().url().optional(),
    video_url: z.string().url().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
  experiences: experiencesCollection,
  projects: projectsCollection,
  certifications: certificationsCollection,
  talks: talksCollection,
};
