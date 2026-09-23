# Deployment notes

This repository contains a static React application. `yarn build` creates the production files in `build/`.

The portfolio URL used in page metadata is `https://jeffportfolio-iota.vercel.app/`. No GitHub Actions deployment workflow or Vercel project configuration is stored in this repository, so deployment settings are managed outside the checked-in files.

For a Vercel project connected to this repository, use the existing build command and publish the generated `build` directory. Confirm the project settings before changing the live deployment.

## Updating the CV

Replace `public/Jeffrey_Hamlin_CV.pdf`. The Hero download control uses this filename.

## Contact form

The contact form opens a prefilled email draft in the visitor's configured email application. The visitor must send the email from that application. It does not submit to a server or store form data.
