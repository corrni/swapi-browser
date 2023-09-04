# SWAPI browser

This application is a simple listing of Star Wars movies, and the characters in each of them.

It relies on two data sources:
- The [Star Wars API (SWAPI)](https://swapi.dev/documentation) for data about the movies and characters.
- The [Star Wars Visual Guide](https://starwars-visualguide.com/) to fetch character images
  and movie covers (the visual guide has no official API, but the path schemes are fairly easy
  to deduce when inspecting the site in devtools).

## Getting Started

For a quick preview of the app, please check out: https://stampen-fe-challenge.vercel.app

To run the application locally in development mode:
1. First, run `pnpm install` on your terminal to fetch all dependencies (you'll
   need to have [pnpm installed](https://pnpm.io/installation) on your machine)
2. In the applications's root directory, create a file for environment
   variables by running `cp .env.sample .env`
3. Open the .env file, and make sure the `VITE_SWAPI_BASE_URL` environment
   variable points to the SWAPI API endpoint (this is currently
   https://swapi.dev/api)
4. You'll also need the `VITE_SW_ASSET_BASE_URL` environment variable to point
   to the correct Star Wars Visual Guide path (currently
   https://starwars-visualguide.com/assets/img)
5. Switch back to your terminal and type `pnpm run dev` to run the local
   development server (you can also run `pnpm run dev --host` to expose the dev
   server to your local network, e.g. if you want to test the app on a mobile
   device)

To run a production build locally, follow steps 1-4 above, and then:
1. Run `pnpm run build` on your terminal to create a production build
2. Run `pnpm run preview` to serve the production build on your machine (or
   `pnpnm run preview --host` to expose the app to your local network, as
   outlined in step 5 above)

## About the application

### Tech stack

This application is written in React and TypeScript, as well as:
- [Vite](https://vitejs.dev/) for frontend tooling (much better DX than CRA, in my opinion)
- [Styled components](https://styled-components.com/) for styling, with the [`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) plugin
- [React Router v6](https://reactrouter.com) for routing
- [Tanstack Query v4](https://tanstack.com/query/latest) (fka react-query) for the data layer
- I also used [the suspensive package](https://suspensive.org/docs/react-query/README.i18n) to fix a TypeScript issue in react-query (see notes below)

### Approach and key decisions

I started out with a couple of  assumptions: for one, my solution did not need
all the frills (pixel-perfect designs, SEO support, highly optimized bundles,
etc.) of a production-grade application; and while my creativity would be
assessed, it didn't seem likely that I would be expected to rise to the level of
professional graphic or UX designer.

So I went with a minimalist UI, and chose to focus on *beautiful code* for the
most part (or my take on what that means in the React context, at any rate):
- Good DX (e.g. descriptive errors, including dev tools). One exception is
  that I did not include tooling to generate types for the API (see notes).
- A relatively shallow structure to avoid nested directories and namespaces as much
  as possible (e.g. except where necessary for consistence).
- Avoiding cross-module imports, and using module aliases (e.g. `@/hooks`) to
  make it easier to alter or move modules later on.
- Self-documenting code, only using comments where I felt that it wouldn't be
  evident why I'd made a particular choice.
- Simplicity: for example, I used React Suspense to move the usual `isLoading`
  and `isError` conditionals up to the nearest suspense and error boundaries in
  order to reduce cognitive complexity and centralise error-handling. I also
  tried to keep the "path down the render" as readable as I could (e.g. by
  moving complex logic into custom hooks).
- A decent git history (e.g. descriptive names, and avoiding the sort of
  "jazz-hand" commits that seem to *touch all the things*).

### What I could have done better

I think the solution is decent overall, but I could have done some things better:
- Spent more time working on the styling (it's a little sparse if I'm being honest)
- Adding a theme, and being more disciplined about design tokens
- Better image loaders and skeletons for the cards I built for the listing pages
- Tests...


### Additional notes

#### JSON Schema issue in SWAPI

The SWAPI documentation mentions endpoints (`/<resource_name>/schema/`) that
should provide JSON schemas for each type of resource (e.g. film, characters,
planets), but [these are currently broken](https://github.com/Juriy/swapi/issues/37).

Luckily enough, the [relevant JSON schema files](https://github.com/phalt/swapi/tree/master/resources/schemas) are readily available from the
project's repository, so I generated the [`Film` and `Character` types](https://github.com/corrni/stampen-fe-challenge/commit/f0e5900fd47b575644de6d0e98ffba4cce049dbe)
manually using the [`json-schema-to-typescript` package](https://www.npmjs.com/package/json-schema-to-typescript).

I chose not to include the script I used because adding any sort of codegen
tooling felt like overkill.

#### Tanstack Query suspense support

[Suspense support is still experimental](https://tanstack.com/query/latest/docs/react/guides/suspense) in the current version of Tanstack
Query, and while the functionality was robust enough to use in the challenge,
[some of the types are still incorrect](https://github.com/TanStack/query/issues/1297).

I [used hooks from the suspensive query package](https://github.com/corrni/stampen-fe-challenge/commit/a2279da4a7ce1a50270e5ebe2ed2cb9857387601) to solve the issue.
