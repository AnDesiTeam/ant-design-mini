import { Component, triggerEvent } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormTextareaDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormTextareaDefaultProps,
  {
    handleRef(input) {
      this.input = input;
    },
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur(value, e) {
      triggerEvent(this, 'blur', resolveEventValue(value), e);
    },
    onFocus(value, e) {
      triggerEvent(this, 'focus', resolveEventValue(value), e);
    },
    onConfirm(value, e) {
      triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
    onClear(value, e) {
      this.emit('onChange', '');
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
  },
  null,
  [
    createForm({
      methods: {
        setFormData(this: any, values) {
          this.setData({
            ...this.data,
            formData: {
              ...this.data.formData,
              ...values,
            },
          });
          this.input.update(this.data.formData.value);
        },
      },
    }),
  ]
);
