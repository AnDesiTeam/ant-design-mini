import { PickerDefaultProps } from './props';
import computed from '../mixins/computed';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';
import { store } from '../Form/store';
import { getMatchedItemByValue, getMatchedItemByIndex, getStrictMatchedItemByValue } from './utils';

Component({
  mixins: [computed, controlled(), formMixin()],
  props: PickerDefaultProps,
  data: {
    visible: false,
    formatValue: '',
    columns: []
  },
  tempSelectedIndex: null,
  single: false,
  onInit() {
    const updatePickerFiledValue = (v) => {
      const changeValue = v.map((item, index) => {
        return this.props.data[index].findIndex((target) => item === target);
      });
      this.formatValue = v;
      const showValue = this.props.onFormat ? this.props.onFormat(v) : noop(v);
      this.setData({
        showValue,
        valueIndex: changeValue,
      });
    };
    if (!this.$page._getCurrentField) return;
    const { form: formFn, field: fieldFn } = this.$page._getCurrentField();
    const form = formFn();
    const field = fieldFn();
    store.addUpdateFiledValue(form, field, updatePickerFiledValue);
  },
  methods: {
    computed() {
      const columns = this.getterColumns()
      const formatValue = this.getterFormatText();
      const selectedIndex = this.getterSelectedIndex();
      return {
        formatValue,
        selectedIndex,
        columns
      };
    },
    getterColumns() {
      let columns = []
      if  (this.props.data.length > 0) {
        if (this.props.data.every(item  => item instanceof Array)) {
          this.single  = false
          columns = this.props.data.slice()
        } else {
          this.single  = true
          columns = [this.props.data]
        }
      }
      return columns 
    },
    getterFormatText() {
      const { onFormat } = this.props;
      const { cValue, columns } = this.data;
      let formatValue = '';
      const { matchedColumn } =  getStrictMatchedItemByValue(columns, cValue, this.single)
      formatValue = onFormat(cValue, matchedColumn, this.props.data);
      return formatValue
    },

    getterSelectedIndex() {
      const selectedIndex = [];
      const columns = this.data.columns;
      const { cValue }  = this.data;
      let value = cValue;
      if (this.single) {
        value = [cValue]
      }
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const compareValue  =  value[i]
        if (compareValue  === undefined || compareValue  === null) {
          selectedIndex[i] = 0
        }
        let index  = column.findIndex(c => {
          return c === compareValue || c.value === compareValue
        })
        if (index === -1) { index  = 0 }
        selectedIndex[i]  = index
      }
      return selectedIndex
    },

    onOpen() {
      const { disabled } = this.props;
      if (!disabled) {
        this.tempSelectedIndex = null;
        this.setData({
          visible: true,
        });
        this.triggerPicker(true);
      }
    },

    triggerPicker(visible) {
      const { onTriggerPicker } = this.props;
      if (onTriggerPicker) {
        onTriggerPicker(visible);
      }
    },

    onDismiss() {
      const { onDismiss } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onDismiss) {
        return onDismiss();
      }
    },

    onChange(e) {
      const { onChange } = this.props;
      const { value: selectedIndex } = e.detail;
      this.tempSelectedIndex = selectedIndex;
      const { matchedColumn, matchedValues } = getMatchedItemByIndex(
        this.data.columns,
        this.tempSelectedIndex,
        this.single
      );
      if (onChange) {
        onChange(matchedValues, matchedColumn);
      }
    },

    onOk() {
      let result;
      if (this.tempSelectedIndex) {
        result = getMatchedItemByIndex(
          this.data.columns,
          this.tempSelectedIndex,
          this.single
        );
      } else {
        result = getMatchedItemByValue(this.data.columns, this.data.cValue, this.single);
      }
      const { matchedColumn, matchedValues } = result;
      this.setData({
        cValue: matchedValues,
      });
      if (this.props.onOk)  {
        this.props.onOk(matchedValues, matchedColumn )
      }
      this.triggerPicker(false);
      this.setData({
        visible: false,
      });
    },
  },
});
