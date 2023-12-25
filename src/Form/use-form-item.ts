import { Value, Values } from 'async-validator';
import {
  useState,
  useEvent,
  useRef,
  useEffect,
} from 'functional-mini/component';
import { EventTrigger } from './form';

type EventCallback = (trigger: EventTrigger, value?: Value) => void;

export const useFormItem = (props) => {
  const [formData, setFormDate] = useState({
    value: undefined,
    status: 'default',
    required: false,
    errors: [],
  });

  const emitRef = useRef<EventCallback | null>(null);
  useEvent('setFormData', (values: Values) => {
    setFormDate((old) => {
      return {
        ...old,
        ...values,
      };
    });
  });

  useEvent('getFormData', () => {
    return formData;
  });

  useEvent('on', (callback: EventCallback) => {
    emitRef.current = callback;
  });

  const originalProps = useRef();
  useEvent('getProps', () => {
    return originalProps.current;
  });

  useEffect(() => {
    return () => {
      emit('didUnmount');
    };
  }, []);

  function emit(event: string, value?: any) {
    if (emitRef.current) {
      emitRef.current(event, value);
    } else {
      console.log('emit callback is null', event, value);
    }
  }

  useEffect(() => {
    emit('deriveDataFromProps', props);
    originalProps.current = props;
  }, [props]);

  return {
    formData,
    emit,
  };
};
