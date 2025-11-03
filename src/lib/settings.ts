import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";
import { Text2ImgImageSize, OpenAIOptions } from "./openai";

interface PluginOptions extends OpenAIOptions {
  injectPrefix?: string;
}

export const settingsSchema: SettingSchemaDesc[] = [
  {
    key: "openAIKey",
    type: "string",
    default: "",
    title: "OpenAI API Key",
    description:
      "Your OpenAI API key for AI text generation.",
  },
  {
    key: "openAICompletionEngine",
    type: "string",
    default: "gpt-3.5-turbo",
    title: "AI Model",
    description: "Select the AI model for text generation.",
  },
  {
    key: "chatCompletionEndpoint",
    type: "string",
    default: "https://api.openai.com/v1",
    title: "API Endpoint",
    description:
      "API endpoint URL for AI service.",
  },
  {
    key: "chatPrompt",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "System Prompt",
    description:
      "System message to guide AI response behavior.",
  },
  {
    key: "openAITemperature",
    type: "number",
    default: 1.0,
    title: "Temperature",
    description:
      "Control response randomness (0.1-0.5: focused, 0.7-1.0: creative).",
  },
  {
    key: "openAIMaxTokens",
    type: "number",
    default: 1000,
    title: "Max Tokens",
    description:
      "Maximum tokens per response (affects response length and API cost).",
  },
  {
    key: "injectPrefix",
    type: "string",
    default: "",
    title: "Output prefix",
    description:
      "Prepends the output with this string. Such as a tag like [[gpt3]] or markdown like > to blockquote. Add a space at the end if you want a space between the prefix and the output or \\n for a linebreak.",
  },
  {
    key: "text2ImgImageSize",
    type: "string",
    default: "1024",
    title: "Text2Img Image Size",
    description:
      "Size of the image to generate. Can be 256, 512, or 1024 for dall-e-2;  Must be one of 1024x1024 , 1792x1024 , or 1024x1792 for dall-e-3 models.",
  },
  {
    key: "text2ImgModel",
    type: "string",
    default: "dall-e-3",
    title: "Text2Img Model",
    description: "The text-to-image model to use. Can be any model name supported by your API provider.",
  },
  {
    key: "text2ImgStyle",
    type: "string",
    default: "vivid",
    title: "Style",
    description:
      "The style of the generated images. Must be one of vivid or natural. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.",
  },
  {
    key: "text2ImgQuality",
    type: "string",
    default: "standard",
    title: "Quality",
    description:
      "The quality of the image that will be generated. ‘hd’ creates images with finer details and greater consistency across the image. Defaults to ‘standard’.",
  },
  {
    key: "shortcutBlock",
    type: "string",
    default: "mod+j",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "popupShortcut",
    type: "string",
    default: "mod+g",
    title: "Keyboard Shortcut for /gpt popup",
    description: "",
  },
];

function unescapeNewlines(s: string) {
  return s.replace(/\\n/g, "\n");
}

export function getOpenaiSettings(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const text2ImgImageSize = logseq.settings!["text2ImgImageSize"] as Text2ImgImageSize;
  const text2ImgModel = logseq.settings!["text2ImgModel"];
  const text2ImgStyle = logseq.settings!["text2ImgStyle"];
  const text2ImgQuality = logseq.settings!["text2ImgQuality"];
  const chatPrompt = logseq.settings!["chatPrompt"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    text2ImgImageSize,
    text2ImgModel,
    text2ImgQuality,
    text2ImgStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
