/**
 * -----------------------------------------------------------------------------
 * CONTENT LAYER
 *
 * Every page reads its content through this file — never directly from a CMS
 * client. Right now it returns the plain data files in `src/data/`, which the
 * client can edit themselves (see CONTENT-GUIDE.md).
 *
 * When you are ready to move to a hosted CMS, you only rewrite the bodies of
 * these functions to fetch from the CMS instead. No page or component changes.
 * See `src/lib/cms.js` for the migration notes.
 * -----------------------------------------------------------------------------
 */

import { services, getServiceBySlug, getServiceSlugs } from '@/data/services'
import { headlineStats, profileStats, trustPoints } from '@/data/stats'
import { clients, clientSectors } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import { getAllPosts, getPostBySlug, getPostSlugs, getPostCategories } from '@/data/posts'
import { story, values, timeline, team, process } from '@/data/team'

export const content = {
  services: () => services,
  service: (slug) => getServiceBySlug(slug),
  serviceSlugs: () => getServiceSlugs(),

  headlineStats: () => headlineStats,
  profileStats: () => profileStats,
  trustPoints: () => trustPoints,

  clients: () => clients,
  clientSectors: () => clientSectors,

  testimonials: () => testimonials,

  posts: () => getAllPosts(),
  post: (slug) => getPostBySlug(slug),
  postSlugs: () => getPostSlugs(),
  postCategories: () => getPostCategories(),

  story: () => story,
  values: () => values,
  timeline: () => timeline,
  team: () => team,
  process: () => process,
}

export default content
