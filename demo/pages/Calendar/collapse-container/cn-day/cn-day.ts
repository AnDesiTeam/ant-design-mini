import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import Converter from './js-calendar-converter';
import { Component, getValueFromProps } from '../../../../../src/_util/simply';

interface Props {
  cell: any;
}

Component(
  {
    cell: null,
  } as Props,
  {
    updateData() {
      const cell = getValueFromProps(this, 'cell');
      const time = dayjs(cell?.time);
      const vs = Converter.solar2lunar(
        time.get('year'),
        time.get('month') + 1,
        time.get('date')
      );
      if (vs === -1) {
        this.setData({
          cnday: '',
        });
        return;
      }
      this.setData({
        cnday: vs.lunarFestival || vs.festival || vs.IDayCn,
        festival: !!vs.festival || !!vs.lunarFestival,
        unset: cell?.isSelectedBegin || cell?.isSelectedEnd,
      });
    },
  },
  {
    cnday: '',
    festival: '',
    unset: '',
  },
  null,
  {
    /// #if ALIPAY
    onInit() {
      this.updateData();
    },
    didUpdate(prevProps) {
      const cell = getValueFromProps(this, 'cell');
      if (!equal(prevProps.cell, cell)) {
        this.updateData();
      }
    },
    /// #endif
    /// #if WECHAT
    attached() {
      this.updateData();
    },
    observers: {
      '**': function (data) {
        const prevData = this._prevData || this.data;
        this._prevData = { ...data };
        if (!equal(prevData.cell, data.cell)) {
          this.updateData();
        }
      },
    },
    /// #endif
  }
);
