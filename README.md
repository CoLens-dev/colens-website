<p align="center">
  <a href="https://www.colens.space">
    <img alt="CoLens" src="./src/images/logo.jpg" width="400" />
  </a>
</p>

## 🚀 Quick start

1.  **Tech Stack**

    - For our website we are using Gatsby and Github actions


2.  **Start developing**

    - It's really simple: 
      - Clone the repo using `git clone`
      - Run `npm install` to install all necessary packages
      - Run `npm run develop` to start Gatsby dev server and enable live reload (by default page is served on localhost:8000)
      - Make changes
      - Create PR which will be reviewed and eventually your changes will be merged into main branch and available on the website!!!

3.  **CI/CD**

    - GitHub actions and github pages are used to build this website. Specific branch `gh-pages` is the source for github pages deployment. Action is triggered on every merge to `main` branch after which changes should be visible on https://colens.space.
