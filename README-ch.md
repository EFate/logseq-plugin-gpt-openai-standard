<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="./docs/openai.webp" alt="OpenAI 标志"></a>
 <img width=200px height=200px src="./docs/logseq.png" alt="Logseq 标志"></a>
</p>

<h3 align="center">Logseq GPT 插件</h3>

</div>


---

<p align="center">
  支持 OpenAI API 标准接口，提供文本生成、图像生成和语音转文字功能
</p>


## ✨ 功能特性

- **🤖 智能文本生成**：支持 GPT-3.5、GPT-4 及其他 OpenAI API 标准兼容模型
- **🎨 文本转图像**：使用 DALL-E 2/3 及其他兼容模型创建高质量图像
- **🎤 语音转文字**：集成 Whisper 模型，实现高效的语音识别
- **🔧 灵活配置**：为文本、图像和语音服务提供独立的 API 端点和密钥
- **⌨️ 键盘快捷键**：快速访问 AI 命令，提高工作效率
- **📝 自定义提示**：定义系统提示以指导 AI 行为，支持多种预设命令

## 🚀 快速开始

### 基本使用

#### 文本生成命令
- `/gpt-block` - 为当前块生成 AI 内容
- `/gpt-page` - 为整个页面生成 AI 内容
- `/gpt` - 打开 AI 命令面板

#### 图像生成
- `/text2img` - 根据文本描述生成图像

#### 语音转文字
- `/whisper` - 转换音频文件中的语音为文字

## ⚙️ 配置说明

### 必需设置

#### 文本生成模型
- **API 密钥**: 用于文本生成的 OpenAI API 密钥
- **API 基础地址**: 文本生成服务的基础地址
- **模型名称**: GPT-3.5、GPT-4 或其他 OpenAI API 兼容模型

#### 图像生成模型
- **API 密钥**: 用于图像生成的 API 密钥
- **API 基础地址**: 图像生成服务的基础地址
- **模型名称**: DALL-E 2、DALL-E 3 或其他兼容模型

#### 语音转文字模型
- **API 密钥**: 用于语音转文字的 API 密钥
- **API 基础地址**: 语音转文字服务的基础地址
- **模型名称**: Whisper-1 或其他兼容模型



## 🎯 使用示例

### 文本生成

<p align="center">
 <img src="./docs/gpt.gif" alt=""></a>
</p>


### 图像生成

<p align="center">
 <img src="./docs/text2img.gif" alt=""></a>
</p>


### 语音转文字

<p align="center">
 <img src="./docs/whisper.gif" alt=""></a>
</p>


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
3. **图像生成失败**: 检查图像尺寸设置是否与所选模型兼容
4. **语音转文字无响应**: 确保音频文件格式受支持且链接有效

## 🤝 贡献指南

我们欢迎贡献！请：
1. 开一个 issue 讨论提议的更改
2. 遵循现有的代码风格
3. 为新功能添加测试
4. 根据需要更新文档

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 💝 支持

如果觉得有所帮助，点击项目主页顶部的⭐Star 按钮支持！

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=EFate/logseq-plugin-gpt-openai-standard&type=Date)](https://star-history.com/#EFate/logseq-plugin-gpt-openai-standard&Date)