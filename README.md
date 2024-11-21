# Cilium Certified Associate (CCA) - Free Quiz

Challenge Your Cilium Knowledge. Choose a quiz category to start your Cilium certification journey!
- https://cca.purutuladhar.com

https://github.com/user-attachments/assets/3f522c3e-351b-4c26-b973-9302a9c6c082

## Local Development

1. Run development server
```bash
cd /Users/puru/next.js/quiz-app/cilium-quiz
npx next dev
```
2. Browse https://localhost:3000

## Release

1. Build static files
```bash
cd /Users/puru/next.js/quiz-app/cilium-quiz
npx next build
# A custom script to move single HTML file, such as dashboard.html to dashboard/index.html
# Why? API Routes cannot be used with "output: export" - See next.config.ts
./move.sh
```

2. Upload static files to GitHub
3. Once uploaded, Cloudflare pages will auto-trigger the deploy.
4. Browse https://cca.purutuladhar.com
