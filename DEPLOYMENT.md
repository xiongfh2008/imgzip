# 部署到 Cloudflare Pages 的说明

## 重要信息
由于我们的项目是一个静态网站（React应用），正确的部署方式是使用 Cloudflare Pages，而不是 Cloudflare Workers。

## 在 Cloudflare Dashboard 中配置

1. 将代码推送到 GitHub/GitLab/Bitbucket 仓库
2. 访问 https://dash.cloudflare.com/ 
3. 选择您的账户
4. 点击左侧菜单中的 "Pages"
5. 点击 "Create a project"
6. 选择 "Connect to Git"

## 连接您的仓库
1. 找到并选择您刚刚推送的仓库
2. 点击 "Begin setup"

## 配置构建设置
在 "Build configuration" 部分，请设置：

- **Framework preset**: 无（或者自定义）
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `.` （点号代表根目录）

## 环境变量（如果需要）
如果需要，可以添加以下环境变量：
- NODE_VERSION = "20"

## 部署
点击 "Save and Deploy" 按钮。

您的应用将会被自动构建和部署。首次部署可能需要几分钟时间。

## 故障排除

如果构建失败，请检查：

1. 确保 package.json 中有正确的 build 脚本
2. 确保构建输出目录是 "dist"
3. 检查依赖项是否正确安装

## 注意事项

- 不要使用 `wrangler deploy` 命令（这是用于 Workers 的）
- 对于静态网站，使用 `npx wrangler pages deploy` 或通过 Git 集成
- Cloudflare Pages 会自动处理构建过程