---
title: 'Deploying your own static templated site using github pages'
date: '2024-09-28'
desc: explore how this site was made and how you can make your own
---

This website was built in Next.js with vanilla css and some plugins which translate `.md` files into `jsx` allowing for dynamic embedding of said markdown files. A common misconception is that websites built using frameworks need extravagant deployment methods such as `netlify`, when in reality most websites built in React-based frameworks can still be statically built and served for free on sites such as github pages. In this way you get all the benefits of components and being about to template your site and also take advantage of a free way to deploy your wonderful site after you are done.

<br>

For example, this site is built in Next.js with the purpose of being able to use layouts for different pages and dynamically creating markdown blog posts, but also because I can very simply build an entire static version of this site using `npm run build`. Next.js has the benefit of additional SEO focused enhancements, which you can read more about [here](https://prismic.io/blog/how-does-nextjs-help-with-seo). In this case I am using SSG, which can have its downfalls when a site becomes extremely large, but since I am not an enterprise building 6000 dashboards, I prefer SSG and the benefit of no server cost.

<br>

Don't overcomplicate yourself. Don't use a framework or a technology just because everyone else is using it. Learn about the technology and what is brings to the table and only then, when you are convinced you need it, you should put the work in. The worst feeling you can have is sinking multiple hours into something only to realize it could have been done much faster and much simpler. If you do end up wasting time overcomplicating yourself, so be it, its the only way to really learn. That being said, do not follow this guide thinking its the best way to make your personal website. It was the best solution for me, but it may not be for you! If you are building a simple 1 page website, seriously consider using vanilla html,js and css, it is so simple and so powerful.

<br>

## how to build your own nextjs github pages site

<br>

Since most of the stuff I did was learnt from google searching, instead of trying to summarize others people's words (in a shittier way most likely), I will provide all the packages and sites I used to complete the major components of this website. The rest is up to you.

<br>

  * [Getting started with Next.js](https://nextjs.org/docs)
  * [Deploying Next.js to github pages](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/)
  * [Configuring markdown in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
    * [Building a static Next.js blog site](https://www.youtube.com/watch?v=QIIc5EYSZpw)
    * [Markdown to JSX](https://www.npmjs.com/package/markdown-to-jsx)
  * [Learn how to write in markdown](https://www.markdownguide.org/basic-syntax/)
  * [And for fun, make some custom cursors!](https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/)

<br>

### tips and stuff I ran into

<br>

1. Be careful when following the deployment tutorial setup above. The following lines can override your existing `next.config.js` file ann throw errors relating to your `mdx` compiler.

<br>

```
- name: Setup Pages
  uses: actions/configure-pages@v3
  with:
    # Automatically inject basePath in your Next.js configuration file and disable
    # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
    #
    # You may remove this line if you want to manage the configuration yourself.
    static_site_generator: next
```

<br>

Remove the with part of the ci .yml to fix the error.

Source: https://github.com/vercel/next.js/issues/58637

<br>

2. Additionally, go to your github repo to Settings > Code and Automation > Pages and then change the source of your build and deployment to Github Actions in order for your deployment CI to function properly and not be overridden by deployment from a branch.

<br>

## ending notes

<br>

The artwork (if you can call it that) on this site is not found online. I recommend trying to design everything about your site in your own style. Be inspired by others, but do not turn into a clone. I have seen too many people planting the same `Three.js` model in their site that follows your cursor or something of the sort and I know this because I have been one of those clones. Try something new, and see what happens.

<br>

Some of the best free tools for such a task:
  * [Photopea --> a free web-based version of photoshop](https://www.photopea.com/)
  * [BoxySVG --> a free web-based version of illustrator](https://boxy-svg.com/)

<br>

Now I am going to go deploy this on github pages for the first time. It probably won't go too smoothly, but I assure you that if I can, you can too.