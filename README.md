# Welcome to Remix and Mantine!

- [Mantine Docs](https://mantine.dev/)
- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Important 
- This template should work as expected however if styles aren't being applied please make sure to check browser extension as they might sometime inject their own styles to `head` tag
- It has been pointed out that `loom ` extensions causes this kind of errors
