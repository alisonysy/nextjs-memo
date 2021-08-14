This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Integration with Tinymce
When rendering Tinymce with SSR, the `id` of Tinymce will be different once rendered and an error occurs. 
**Caveat**: use dynamic import and not SSR to render Tinymce.