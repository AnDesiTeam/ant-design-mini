/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';
/**
 * @description 全局配置
 */

export interface IConfigProviderProps extends IBaseProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: string;
  /**
   * @description 主题
   */
  theme?: 'dark' | 'light';
  /**
   * @description 主题定制
   */
  themeVars?: Record<string, string | number>;
  /**
   * @description 国际化文案
   */
  locale?: Record<string, string | number>;
}

export const ConfigProviderProps: IConfigProviderProps = {};
