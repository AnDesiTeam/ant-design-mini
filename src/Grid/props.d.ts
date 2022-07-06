import { IBaseProps } from '../_base';
import { IGridItem } from './GridItem/props';

/**
 * @description 宫格
 */
export interface IGridProps extends IBaseProps {
  /**
   * @desscription 图标样式
   * @default 'normal'
   */
  iconStyle?: 'normal' | 'circle';
  /**
   * @description 图标尺寸
   */
  iconSize?: string;
  /**
   * @description 组合形式
   * @default 'tile'
   */
  mode: 'tile' | 'scroll';
  /**
   * @description 每行展示的元素个数
   * @default 5
   */
  columns?: number;
  /**
   * @description 元素列表
   */
  items: IGridItem[];
  /**
   * @description 分页符背景色
   * @default '#ddd'
   */
  PaginationFillColor?: string;
  /**
   * @description 分页符颜色
   * @default '#1677ff'
   */
  PaginationFrontColor?: string;
  /**
   * @description 点击事件
   * @param item
   */
  onTap?(item: IGridItem): void;
}
export declare const GridDefaultProps: IGridProps;
