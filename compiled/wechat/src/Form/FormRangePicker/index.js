import { Component, triggerEvent, triggerEventValues, triggerEventOnly, getValueFromProps, } from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormRangePickerDefaultProps } from './props';
import { createForm } from '../form';
Component(FormRangePickerDefaultProps, {
    onOk: function (date, dateStr, e) {
        var v = resolveEventValues(date, dateStr);
        this.emit('onChange', v[0]);
        triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange: function (type, date, dateStr, e) {
        triggerEventValues(this, 'pickerChange', resolveEventValues(type, date, dateStr), e);
    },
    onVisibleChange: function (visible, e) {
        triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker: function (e) {
        triggerEventOnly(this, 'dismissPicker', e);
    },
    handleFormat: function (date, dateStr) {
        var onFormat = getValueFromProps(this, 'onFormat');
        if (onFormat) {
            return onFormat(date, dateStr);
        }
    },
    handleFormatLabel: function (type, value) {
        var onFormatLabel = getValueFromProps(this, 'onFormatLabel');
        if (onFormatLabel) {
            return onFormatLabel(type, value);
        }
    },
}, {}, [createForm()], {
    attached: function () {
        this.setData({
            handleFormat: this.handleFormat.bind(this),
            handleFormatLabel: this.handleFormatLabel.bind(this),
        });
    },
});
