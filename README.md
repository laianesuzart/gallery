# [📸 Lai's Gallery](https://gallery-production-3bee.up.railway.app/)

<p align="center">A simple gallery featuring my photos of nature and animals</p>

<p align="center">
  <a href="#about">about</a> •
  <a href="#tech-stack">tech stack</a> •
  <a href="#getting-started">getting started</a> •
  <a href="#layout">layout</a> • 
  <a href="#author">author</a> •
  <a href="#license">license</a>
</p>

## about

Lai’s Gallery is a small photo gallery built with React and Bun.
All images are hosted on Cloudflare R2 and served through a Cloudflare Worker endpoint that this app fetches from.

Click any image to open it in a modal for a closer look.
There’s also a sakura petal animation in the background - you can pause it anytime with a click.
Animations automatically respect the system’s reduced motion preference. 🌸
The interface also switches between light and dark mode based on your system theme.

## tech stack

[![React](https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![CSS](https://img.shields.io/badge/css-663399?logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bun](https://img.shields.io/badge/bun-black?logo=bun&logoColor=white)](https://bun.com/)

## getting started

To run the project locally, make sure you have [Bun](https://bun.com) installed. 

Add a `.env` file with your API base URL (for example, API_BASE_URL=https://your-endpoint.com), and update the API logic for /api/images in `index.ts` if needed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/laianesuzart/gallery.git
   ```
2. Navigate to the project folder:
   ```bash
   cd candy-shop
   ```
3. Install the dependencies:
   ```bash
   bun install
   ```
4. Start the development server:
   ```bash
   bun dev
   ```


## layout

<img width="1734" height="935" alt="image" src="https://github.com/user-attachments/assets/8ed22283-bb3e-49ab-9c3f-5e8eea739996" />

<img width="1652" height="938" alt="image" src="https://github.com/user-attachments/assets/94ffca5a-59a0-4915-8c29-67e237822474" />

<img width="1703" height="931" alt="image" src="https://github.com/user-attachments/assets/6294cb52-91fd-4905-9a2d-198adcef3498" />


## author

**Laiane Suzart**:
  <br>
  [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/laianesuzart/)](https://www.linkedin.com/in/laianesuzart/)
  [![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/laianesuzart)](https://github.com/laianesuzart)

## license

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
