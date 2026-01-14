#!/bin/bash
# 部署脚本用于将 Image Zip 部署到 Cloudflare Pages

# 构建项目
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
  echo "Build successful!"
  echo "To deploy to Cloudflare Pages, follow these steps:"
  echo ""
  echo "1. Push this code to a GitHub/GitLab/Bitbucket repository"
  echo "2. Log into Cloudflare Dashboard"
  echo "3. Go to Pages and click 'Create a project'"
  echo "4. Connect your Git provider and select your repository"
  echo "5. For 'Build configuration', use:"
  echo "   Build command: npm run build"
  echo "   Build output directory: dist"
  echo "   Root directory: ."
  echo "6. Click 'Save and deploy'"
  echo ""
  echo "Your site will be available at https://your-project.pages.dev"
else
  echo "Build failed! Please fix the errors before deploying."
fi