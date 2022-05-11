import { FormStore } from './store'
export interface IComponentProps {
  initialValues?: Record<string, any>;
  onValuesChange?: (changedValues, totalValues) => any;
  onFinish?: (totalValues) => any;
  onFinishFailed?: (value, errorInfo) => any;
  className?:  string;
  form?: string;
  requiredMarkStyle?: 'asterisk' | 'text-required' | 'text-optional';
  position?: 'vertical' | 'horizontal';
} 

export type IComponentData = Record<string, any>;

export interface IComponentMethods {
  onChangeFormFieldValue(changedValues,  values, options): void;
  onSubmit(): void;
}

export interface IComponentExtraThis {
  store: FormStore;
  onBindChangeFormFieldValue(): void;
  onBindSubmit(): void;
}

export type FormMixInParams = {
  propsTriggerChange?: string;
  propsValue?: string;
  defaultPropsValue?: any;
  dataValue?: string
};
