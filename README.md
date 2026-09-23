# Jeffrey Hamlin Vinod Portfolio

A single-page portfolio built with React, JavaScript, Tailwind CSS and CRACO. It presents profile information, education, skills, projects, experience, certifications, leadership and contact details.

## Local development

```bash
yarn install
yarn start
```

Create a production build with `yarn build`. Run the configured test command with `yarn test`.

## Content locations

- Profile and education: `src/components/Hero.js` and `src/components/About.js`
- Skills: `src/components/Skills.js`
- Projects: `src/components/Projects.js`
- Experience: `src/components/InternExperience.js`
- Leadership: `src/components/Leadership.js`
- Certifications: `src/components/Certifications.js`
- Contact details: `src/components/Contact.js`
- Page metadata: `public/index.html`

## CV

The Hero download button uses `public/Jeffrey_Hamlin_CV.pdf`. Replace that file to publish a new CV while keeping the filename.

## Deployment

The portfolio URL in page metadata is `https://jeffportfolio-iota.vercel.app/`. The repository does not include a deployment workflow. See `DEPLOYMENT.md` for build output and deployment notes.
