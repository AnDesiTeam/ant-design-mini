import { getInstance } from '../../../tests/utils';
import { describe, expect, it } from 'vitest';
import dayjs, { Dayjs } from 'dayjs';
import { CellState, ComponentProps } from '../props';

class SelectorQuery {
  select() {
    return this;
  }
  boundingClientRect() {
    return this;
  }
  exec(callback: (ret) => void) {
    callback([
      {
        top: 0,
        bottom: 0,
        height: 0,
      },
    ]);
  }
}

function findDate(monthCells: CellState[], date: Dayjs) {
  return monthCells.find((cell: CellState) => {
    return date.isSame(dayjs(cell.time), 'date');
  });
}
function initCalendar(props: Partial<ComponentProps>) {
  return getInstance('Calendar', props, {
    createSelectorQuery: () => {
      return new SelectorQuery();
    },
    canIUse: () => {
      return true;
    },
  });
}

describe('Calendar', () => {
  it('测试默认值', () => {
    const instance = initCalendar({});
    const initData = instance.getData();

    const { monthList, markItems } = initData;

    // 默认显示 6 个月
    expect(monthList.length).toEqual(6);
    // 默认从周日开启
    expect(markItems).toEqual(['日', '一', '二', '三', '四', '五', '六']);
    const today = findDate(monthList[0].cells, dayjs());
    // 默认显示今天
    expect(today.top?.label).toEqual('今日');
    // 默认不选择
    expect(today.isSelect).toEqual(false);
  });

  it('测试 weekStartsOn', () => {
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
    });

    const initData = instance.getData();
    const { monthList, markItems } = initData;
    expect(monthList.length).toEqual(2);
    // 默认从周日开启
    expect(markItems).toEqual(['一', '二', '三', '四', '五', '六', '日']);
    const firstWeek = monthList[0].cells.slice(0, 7).map((cell: CellState) => {
      return dayjs(cell.time).format('YYYY-MM-DD');
    });
    expect(firstWeek).toEqual([
      '2022-12-26',
      '2022-12-27',
      '2022-12-28',
      '2022-12-29',
      '2022-12-30',
      '2022-12-31',
      '2023-01-01',
    ]);
  });
});
