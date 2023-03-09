import { Form } from '../../../src/Form/form';


Page({
  form: new Form(),
  data: {
    changedValuesText: '',
    allValuesText: '',
  },
  onReady() {
    this.form.onValuesChange(changedValues => {
      let changedValuesText = '';
      let allValuesText = '';
      Object.keys(changedValues).forEach(name => {
        const value = changedValues[name];
        changedValuesText += `${name}: ${value};`;
      });
      const allValues = this.form.getFieldsValue();
      Object.keys(allValues).forEach(name => {
        const value = allValues[name];
        allValuesText += `${name}: ${value};`;
      });
      this.setData({
        changedValuesText,
        allValuesText,
      });
    });
  },
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
  }
});
