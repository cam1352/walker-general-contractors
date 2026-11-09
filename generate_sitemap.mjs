import fs from 'fs';
import path from 'path';

const locationsData = JSON.parse(fs.readFileSync('src/data/locations.json', 'utf8'));
const baseUrl = 'https://generalcontractorsvancouver.ca';

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const addUrl = (urlStr, priority = 0.8) => {
    xml += `  <url>\n    <loc>${urlStr}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
};

addUrl(baseUrl, 1.0);
addUrl(`${baseUrl}/overview`, 0.9);
addUrl(`${baseUrl}/locations`, 0.9);
addUrl(`${baseUrl}/subcontractors`, 0.8);

for (const main of Object.keys(locationsData)) {
    for (const sub of Object.keys(locationsData[main])) {
        if (sub !== 'meta') {
            addUrl(`${baseUrl}/locations/${main}/${sub}`, 0.7);
        }
    }
}

xml += `</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated!');
