import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Convert markdown content using Pandoc for LaTeX rendering.
 * @param {string} markdownContent - The raw markdown content.
 * @returns {Promise<string>} - The converted HTML content.
 */
export const convertWithPandoc = async (markdownContent, currSlug) => {
    const tempMarkdownPath = path.join(process.cwd(), `/tmp/${currSlug}.md`);
    const tempHTMLPath = path.join(process.cwd(), `/tmp/${currSlug}.html`);

    // Write the markdown content to a temporary file
    fs.writeFileSync(tempMarkdownPath, markdownContent);

    // Execute pandoc command
    return new Promise((resolve, reject) => {
        exec(`pandoc ${tempMarkdownPath} -o ${tempHTMLPath}`, (error) => {
            if (error) {
                return reject(error);
            }

            // Read the resulting HTML
            const htmlContent = fs.readFileSync(tempHTMLPath, 'utf-8');
            resolve(htmlContent);

            // Clean up temp files
            fs.unlinkSync(tempMarkdownPath);
            fs.unlinkSync(tempHTMLPath);
        });
    });
};
