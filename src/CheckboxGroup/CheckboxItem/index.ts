import { CheckboxItemDefaultProps } from './props';
import { store } from '../context';

Component({
  props: CheckboxItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  didMount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    const setDisabled = (_disabled: boolean) => this.setData({ _disabled });
    const setChecked = (_checked: boolean) => this.setData({ _checked });
    const getChecked = () => this.data._checked;
    const getItemPropsVal = (key: string) => this.props[key];

    store.addItem(key, `${this.$id}`, { setDisabled, getChecked, setChecked, getItemPropsVal });

    // 用户指定checkBoxItem的key，节点变更如下：123456 -> 78，节点不会复用，只能在创建节点的时候更新
    try {
      store.updateItemValue(key, `${this.$id}`);
    // eslint-disable-next-line no-empty
    } catch (err) {}
  },
  didUpdate(prevProps) {
    const { uid, value } = this.props;
    const { value: oldValue } = prevProps;
    if (value !== oldValue) {
      const key = `${this.$page.$id}-${uid}`;
      // 考虑到a:for的情况
      store.updateItemValue(key, `${this.$id}`);
    }
  },
  didUnmount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    store.removeItem(key, `${this.$id}`);
  },
  methods: {
    onItemChange(value) {
      const { uid } = this.props;
      const key = `${this.$page.$id}-${uid}`;
      store.triggerItem(key, `${this.$id}`, value);
    },
  },
});
