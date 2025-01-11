---
sidebar_position: 1
---

# Installation
To install and run the GNOME Nepal website locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/GNOME-Nepal/website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd website
   ```

3. Install the dependencies:

   ```bash
   yarn install && cd docusaurus && yarn install
   ```

   ```bash
   npm i && cd docusaurus && npm i
   ```

4. Start the development server:

   ```bash
   yarn run dev
   ```

   ```bash
   npm run dev
   ```
---
> - Main site: `http://localhost:5173`.
> - Docs site: `http://localhost:5173/docs`.