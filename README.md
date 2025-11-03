<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="./docs/openai.webp" alt="OpenAI Logo"></a>
 <img width=200px height=200px src="./docs/logseq.png" alt="Logseq Logo"></a>
</p>
<h3 align="center">Logseq GPT Plugin</h3>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

---

<p align="center">Logseq AI Assistant Plugin with OpenAI API standard interface integration, providing intelligent text generation and image generation capabilities.</p>

</div>

## ✨ Features

- **🤖 AI Text Generation**: Supports GPT-3.5, GPT-4, and other OpenAI API standard compatible models
- **🎨 Text-to-Image Generation**: Create images using DALL-E 2/3 and other compatible models
- **⚡ Real-time Streaming Responses**: Stream responses for better user experience
- **🔧 Flexible Configuration**: Independent API endpoints and keys for text and image services
- **⌨️ Keyboard Shortcuts**: Quick access to AI commands for improved productivity
- **📝 Custom Prompts**: Define system prompts to guide AI behavior

## 🚀 Quick Start

### Basic Usage

#### Text Generation Commands
- `/gpt-block` - Generate AI content for the current block
- `/gpt-page` - Generate AI content for the entire page
- `/gpt` - Open AI command panel

#### Image Generation
- `/text2img` - Generate images based on text descriptions

## ⚙️ Configuration

### Required Settings

- **Text Generation API Key**: OpenAI API key for text generation
- **Text Generation API Base URL**: Base URL for text generation service
- **Text2Img API Key**: API key for image generation
- **Text2Img API Base URL**: Base URL for image generation service

### Image Generation Settings

- **Model**: DALL-E 2, DALL-E 3, or other compatible models
- **Image Size**: 256x256, 512x512, 1024x1024, 1024x1792, 1792x1024
- **Quality**: Standard or HD
- **Style**: Vivid or Natural

## 🎯 Usage Examples

### Text Generation

<img src="./docs/gpt.gif" style="zoom: 100%" />

### Image Generation
<img src="./docs/text2img.gif" style="zoom: 100%" />

## ⌨️ Keyboard Shortcuts

- **Mod+G**: Open AI command panel
- **Mod+J**: Quick GPT block generation

## 🔧 Development Guide

### Requirements
- Node.js
- pnpm

### Local Development
```bash
pnpm i
pnpm run dev
```

### Production Build
```bash
pnpm run build
```

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**: Ensure your OpenAI API key is valid and has sufficient credits
2. **Rate Limiting**: If encountering rate limits, wait a few minutes and try again

## 🤝 Contributing

We welcome contributions! Please:
1. Open an issue to discuss proposed changes
2. Follow existing code style
3. Add tests for new features
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- [@EFate](https://github.com/EFate) - Current maintainer
- [@briansunter](https://github.com/briansunter) - Original author

## 🙏 Acknowledgments

- [Logseq](https://logseq.com/) for providing an excellent note-taking platform
- [OpenAI](https://openai.com/) for providing powerful AI models
- All contributors and users who helped improve this plugin