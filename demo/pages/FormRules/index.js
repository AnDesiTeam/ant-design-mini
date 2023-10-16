import { Form } from '../../../src/Form/form';


Page({
  form: new Form({
    rules: {
      password: [
        {
          required: true,
          message: '需要输入密码'
        },
      ],
      confirm: [
        {
          required: true,
          message: '需要输入确认密码'
        },
        (form) => ({
          async validator(_, value) {
            if (!value || form.getFieldValue('password') === value) {
              return;
            }
            throw new Error('验证密码需要跟密码相同');
          },
        }),
      ]
    }
  }),
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  fill() {
    this.form.setFieldValue('account', 'lily');
    this.form.setFieldValue('password', '1234');
    this.form.setFieldValue('confirm', '1234');
  },
  async submit() {
    const values = await this.form.submit();
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
  }
});
