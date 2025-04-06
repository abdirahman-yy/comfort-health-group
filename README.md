# Comfort Health Group Website

Official website for Comfort Health Group, providing housing stabilization services and expert guidance to overcome housing challenges.

## Live Website

Visit the live website at: [comforthealthgroup.org](https://comforthealthgroup.org)

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/abdirahman-yy/comfort-health-group.git
   cd comfort-health-group
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.

### Manual Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The output will be in the `out` directory, which can be deployed to any static hosting service.

## DNS Configuration

To configure your custom domain (comforthealthgroup.org) with GitHub Pages:

1. Add the following A records to your domain's DNS settings:
   ```
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

2. Add CNAME record for www subdomain:
   ```
   CNAME www abdirahman-yy.github.io
   ```

3. Enable HTTPS in GitHub Pages settings after DNS propagation is complete.

## Technologies Used

- Next.js 14+
- React
- TypeScript
- Tailwind CSS

## Project Overview

I created this portfolio landing page for Comfort Health Group as part of my web development portfolio. The site showcases their housing stabilization services and provides an easy way for potential clients to submit referrals.

## Features Implemented

- **Responsive Design**: Created a fully responsive website that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Elements**: Implemented dropdown navigation, accordion sections, and contact forms
- **Form Handling**: Integrated FormSubmit for serverless form processing and email notifications
- **Accessibility**: Ensured the site follows accessibility standards with semantic HTML and proper contrast
- **Optimized Images**: Optimized all images for fast loading and good performance

## Key Challenges & Solutions

- **Anchor Link Navigation**: Fixed issues with anchor links by implementing scroll margin adjustments
- **Dropdown Menu**: Added click-outside detection to enhance user experience with dropdown navigation
- **Form Submission**: Integrated FormSubmit for easy email processing without requiring a backend
- **Responsive Design**: Created a design system that works across all device sizes
- **Content Organization**: Structured the housing service information into easy-to-understand sections

## About Comfort Health Group

Comfort Health Group specializes in Housing Stabilization Services (HSS), a Minnesota Medical Assistance benefit program designed to help individuals with disabilities, seniors, and others experiencing housing instability. We serve the Twin Cities and surrounding metro areas with personalized support aimed at helping clients find and maintain stable housing.

Our mission is to foster stability, empowerment, and overall well-being in communities. We believe that stable housing is the foundation for a better life and work tirelessly to ensure that every individual we serve finds not just a house, but a true home.

## Website Features

- **Modern, responsive design** optimized for all device sizes
- **Housing Stabilization Services information** with detailed explanations of our programs
- **Interactive referral submission form** for clients and case managers
- **Contact form** for general inquiries
- **HIPAA & Privacy Policy** information
- **Detailed About Services page** with accordion-style sections for easy navigation

## Contact

For questions or issues regarding Comfort Health Group services:
- Email: info.chgllc@gmail.com
- Phone: 651-363-6866
- Address: 6160 Summit Drive, Brooklyn Center, MN 55430 