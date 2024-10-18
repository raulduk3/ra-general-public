import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify'
import { getLinksMapping, getPostBySlug, getSlugFromHref, updateMarkdownLinks } from './api'
import removeMd from 'remove-markdown'
import {Element} from 'hast-util-select'
import { renderToStaticMarkup } from "react-dom/server"
import NotePreview from '../components/misc/note-preview'
import { fromHtml } from 'hast-util-from-html'
import { convertWithPandoc } from './pandocConversion';  // Add this import

export async function markdownToHtml(markdown, currSlug) {
  // Update markdown links
  markdown = updateMarkdownLinks(markdown, currSlug);

  // Optionally convert with Pandoc for LaTeX support
  const pandocHtml = await convertWithPandoc(markdown, currSlug);

  // Create the markdown pipeline with remark and rehype
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(rehypeSanitize)
    .use(rehypeRewrite)
    .use(rehypeStringify)
    .process(markdown);

  const html = file.toString();

  // Return a combination of Pandoc and Remark content
  return `${pandocHtml}${html}`;
}

export function getMDExcerpt(markdown: string, length: number = 500) {
  const text = removeMd(markdown, {
    stripListLeaders: false, 
    gfm: true,
  }) as string
  return text.slice(0, length).trim();
}

export function createNoteNode(title: string, content: string) {
  const mdContentStr = getMDExcerpt(content);
  const htmlStr = renderToStaticMarkup(NotePreview({ title, content: mdContentStr }))
  const noteNode = fromHtml(htmlStr);
  return noteNode;
}

function rewriteLinkNodes (node, linkNodeMapping: Map<string, any>, currSlug) {
  if (node.type === 'element' && node.tagName === 'a') {
    const slug = getSlugFromHref(currSlug, node.properties.href)
    const noteCardNode = linkNodeMapping[slug]
    if (noteCardNode) {
      const anchorNode = {...node}
      anchorNode.properties.className = 'internal-link'
      node.tagName = 'span'
      node.properties = { className: 'internal-link-container' }
      node.children = [
        anchorNode,
        noteCardNode
      ]
    }
  }
}
