<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="./docs/openai.webp" alt="OpenAI 标志"></a>
 <img width=200px height=200px src="./docs/logseq.png" alt="Logseq 标志"></a>
</p>
<h3 align="center">Logseq GPT 插件</h3>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

---

<p align="center">Logseq AI 助手插件，集成 OpenAI API 标准接口，提供智能文本生成和图像生成功能。</p>

</div>

## ✨ 功能特性

- **🤖 AI 文本生成**: 支持 GPT-3.5、GPT-4 及其他 OpenAI API 标准兼容模型
- **🎨 文本生成图像**: 使用 DALL-E 2/3 及其他兼容模型创建图像
- **⚡ 实时流式响应**: 流式传输响应以获得更好的用户体验
- **🔧 灵活配置**: 为文本和图像服务提供独立的 API 端点和密钥
- **⌨️ 键盘快捷键**: 快速访问 AI 命令，提高工作效率
- **📝 自定义提示**: 定义系统提示以指导 AI 行为

## 🚀 快速开始

### 基本使用

#### 文本生成命令
- `/gpt-block` - 为当前块生成 AI 内容
- `/gpt-page` - 为整个页面生成 AI 内容
- `/gpt` - 打开 AI 命令面板

#### 图像生成
- `/text2img` - 根据文本描述生成图像



## ⚙️ 配置说明

### 必需设置

- **文本生成 API 密钥**: 用于文本生成的 OpenAI API 密钥
- **文本生成 API 基础地址**: 文本生成服务的基础地址
- **Text2Img API 密钥**: 用于图像生成的 API 密钥
- **Text2Img API 基础地址**: 图像生成服务的基础地址

### 图像生成设置

- **模型**: DALL-E 2、DALL-E 3 或其他兼容模型
- **图像尺寸**: 256x256、512x512、1024x1024、1024x1792、1792x1024
- **质量**: 标准或高清
- **风格**: 生动或自然

## 🎯 使用示例

### 文本生成

<img src="./docs/gpt.gif" style="zoom: 100%" />



### 图像生成
<img src="./docs/text2img.gif" style="zoom: 100%" />



## ⌨️ 键盘快捷键

- **Mod+G**: 打开 AI 命令面板
- **Mod+J**: 快速 GPT 块生成

## 🔧 开发指南

### 环境要求
- Node.js
- pnpm

### 本地开发
```bash
pnpm i
pnpm run dev
```

### 生产构建
```bash
pnpm run build
```

## 🐛 故障排除

### 常见问题

1. **API 密钥错误**: 确保您的 OpenAI API 密钥有效且有足够额度
2. **速率限制**: 如果遇到速率限制，请等待几分钟后重试

## 🤝 贡献指南

我们欢迎贡献！请：
1. 开一个 issue 讨论提议的更改
2. 遵循现有的代码风格
3. 为新功能添加测试
4. 根据需要更新文档

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 👥 作者

- [@EFate](https://github.com/EFate) - 当前维护者
- [@briansunter](https://github.com/briansunter) - 原始作者

## 🙏 致谢

- [Logseq](https://logseq.com/) 提供出色的笔记平台
- [OpenAI](https://openai.com/) 提供强大的 AI 模型
- 所有帮助改进此插件的贡献者和用户