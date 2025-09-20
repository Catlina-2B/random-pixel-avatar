/**
 * 创建头像的配置选项
 */
export interface CreateAvatarOptions {
  /**
   * 头像的网格大小（例如 5 表示 5x5 的像素网格）
   */
  size: number;
  
  /**
   * 每个像素的尺寸（像素）
   */
  pixelSize: number;
  
  /**
   * 基础颜色，如果不提供则使用随机颜色
   * 可以是任何有效的 CSS 颜色值，如 "#FF0000", "rgb(255,0,0)" 等
   */
  baseColor?: string | null;
  
  /**
   * 账户标识符，用于缓存头像
   * 如果提供了账户标识符，会尝试从 localStorage 获取已缓存的头像
   */
  account?: string;
}

/**
 * 创建一个随机的对称像素头像
 * @param options - 创建头像的配置选项
 * @returns 返回 base64 编码的 SVG 数据 URL，可直接用作图片的 src 属性
 * 
 * @example
 * ```javascript
 * // ESM
 * import { createAvatar } from 'random-pixel-avatar';
 * 
 * // CommonJS
 * const { createAvatar } = require('random-pixel-avatar');
 * 
 * // 生成一个 5x5 的头像，每个像素 20x20 像素大小
 * const dataUrl = createAvatar({
 *   size: 5,
 *   pixelSize: 20,
 *   baseColor: "#FF0000",
 *   account: "user123"
 * });
 * 
 * // 在 HTML 中使用
 * const img = new Image();
 * img.src = dataUrl;
 * document.body.appendChild(img);
 * ```
 */
export function createAvatar(options: CreateAvatarOptions): string;

/**
 * 默认导出（兼容 CommonJS 和 ESM）
 */
declare const randomPixelAvatar: {
  createAvatar: typeof createAvatar;
};

export default randomPixelAvatar;
