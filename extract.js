const fs = require('fs');
const html = fs.readFileSync('fetched_html.txt', 'utf8');
const regex = /href=[\'\"]([^\'\"]+)[\'\"]/gi;
let match;
const links = new Set();
while ((match = regex.exec(html)) !== null) {
  const url = match[1];
  if ((url.startsWith('/') || url.includes('regentgrouporg.com')) && 
      !url.includes('.css') && 
      !url.includes('.js') && 
      !url.includes('.png') && 
      !url.includes('.jpg') && 
      !url.includes('wp-json') && 
      !url.includes('xml')) {
    links.add(url);
  }
}
console.log(Array.from(links).join('\n'));
