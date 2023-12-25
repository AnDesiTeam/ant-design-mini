import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormCheckboxGroupDefaultProps, FormCheckboxGroupProps } from './props';

const FormCheckboxGroup = (props: FormCheckboxGroupProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });
  return {
    formData,
  };
};

mountComponent(
  FormCheckboxGroup,
  FormCheckboxGroupDefaultProps as FormCheckboxGroupProps
);
