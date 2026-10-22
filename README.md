# SoftEdge Systems LLC website

Complete static HTML/CSS website. All images and styles are included locally. No build tools or package installation are required. DM Sans (body) and Manrope (headings) load from Google Fonts; system fonts provide an offline fallback. Inline SVG icons require no external icon library. A small JavaScript file prepares contact emails; no backend or payment gateway is included.

## Preview
Run `python3 -m http.server 8000` from this folder and open http://localhost:8000/ . Directory URLs require a web server: use /about/, /services/, /contact/, /privacy-policy/, /terms-and-conditions/, and /refund-policy/ . Each directory contains index.html. No URL rewriting is needed on a host with directory index support.

## Upload
Upload the contents of this folder to your static host's public document root. Keep the directory layout intact. Links use relative paths and support hosting in a subdirectory. Contact email and phone use mailto: and tel: links. The contact form opens the visitor's email app and clearly requires the visitor to send the prepared email. Configure a backend separately if direct form delivery is required.

## Content
Company display name follows the business description: SoftEdge Systems LLC. Address, email and phone match the supplied details. The supplied bookkeeping policy templates were adapted to software services. The 15-day refund request window and approved-refund processing period of 7–10 business days are retained. Confirm that the published policies match your actual business practices before launch.

Payment card marks in the footer are visual references only, not a payment integration or a claim of an active merchant account. Available methods must be confirmed in the service agreement.

## Assets
assets/development.jpg: software workspace photograph from Unsplash, https://unsplash.com/photos/turned-on-gray-laptop-computer-XJXWbfSo2f0 (image source: https://images.unsplash.com/photo-1498050108023-c5249f4df085).
assets/workspace.svg: original illustrative software workspace, not a real client project.

## Editing
Edit HTML content in each index.html file and shared styles in assets/style.css. Header and footer markup is included in every page so the website works without JavaScript or a templating server; update shared markup consistently across all seven pages.
