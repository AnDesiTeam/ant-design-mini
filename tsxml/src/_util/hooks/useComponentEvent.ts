import { useComponent } from 'functional-mini/component';
import fmtEvent from '../fmtEvent';

export function useComponentEvent<T>(props: T) {
  const component = useComponent();
  return {
    triggerEvent: (eventName: string, value: unknown, e: any) => {
      // 首字母大写，然后加上 on

      /// #if ALIPAY
      const alipayCallbackName =
        'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

      if (props[alipayCallbackName]) {
        props[alipayCallbackName](value, fmtEvent(props, e));
      }
      /// #endif

      /// #if WECHAT
      component.triggerEvent('change', value);
      /// #endif
    },
  };
}
