/**
 * -----------------------------------------------------------------------------
 * CMS MIGRATION NOTES  (nothing here runs — this file is documentation)
 * -----------------------------------------------------------------------------
 *
 * The site currently stores its content in `src/data/*.js`. That is free,
 * fast, version-controlled, and fully static-rendered for SEO. For most
 * agency sites it is genuinely enough — see CONTENT-GUIDE.md for how the
 * client edits it.
 *
 * If the client later wants a login-based editor with no code at all, these
 * are the two sensible routes. In BOTH cases the only file you change is
 * `src/lib/content.js` — pages and components stay exactly as they are.
 *
 * ---------------------------------------------------------------------------
 * OPTION A — Decap CMS (free, Git-based)
 * ---------------------------------------------------------------------------
 * Cost:   ₹0. Runs entirely on the repo + GitHub authentication.
 * Editor: a /admin page with forms; each save is a Git commit that redeploys.
 * Good for: this exact site. No database, no monthly fee, no vendor lock-in.
 *
 *   1. npm install decap-cms-app
 *   2. Add /public/admin/index.html and /public/admin/config.yml describing
 *      each collection (services, posts, testimonials, clients, stats).
 *   3. Point the collections at markdown or JSON files in src/data/.
 *   4. Enable Netlify Identity or GitHub OAuth for login.
 *
 * ---------------------------------------------------------------------------
 * OPTION B — Sanity (hosted, free tier then paid)
 * ---------------------------------------------------------------------------
 * Cost:   free tier covers a site this size; paid plans start around $15/mo.
 * Editor: a polished hosted studio, better for non-technical teams and for
 *         image handling / multiple editors.
 *
 *   1. npm install @sanity/client next-sanity
 *   2. Create the project, then set in .env.local:
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *   3. Model the schemas to match the shapes in src/data/.
 *   4. Rewrite src/lib/content.js, for example:
 *
 *        import { createClient } from 'next-sanity'
 *        const client = createClient({
 *          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
 *          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
 *          apiVersion: '2024-01-01',
 *          useCdn: true,
 *        })
 *        export const content = {
 *          services: () => client.fetch('*[_type == "service"]'),
 *          ...
 *        }
 *
 *      The accessors become async, so pages `await content.services()`.
 *      Pages are already async server components, so that is a one-word change.
 *
 * ---------------------------------------------------------------------------
 * Recommendation: launch on the data files, and only add a CMS if the client
 * finds themselves needing to edit weekly. It is a half-day of work to add
 * later, and there is no benefit to paying for it before then.
 * ---------------------------------------------------------------------------
 */

export const CMS_MODE = 'data-files'
