import { useEvent } from './useEvent';
import { useLayoutUpdateEffect } from './useLayoutEffect';
import { hasValue } from './useMergedState';
import { useSafeState as useState } from './useState';
export function useMixState(defaultStateValue, option) {
    var _a = option || {}, defaultValue = _a.defaultValue, value = _a.value, _b = _a.postState, postState = _b === void 0 ? function (v) { return ({ valid: true, value: v }); } : _b;
    // ======================= Init =======================
    var _c = useState(function () {
        var v;
        if (hasValue(value)) {
            v = value;
        }
        else if (hasValue(defaultValue)) {
            v =
                typeof defaultValue === 'function'
                    ? defaultValue()
                    : defaultValue;
        }
        else {
            v =
                typeof defaultStateValue === 'function'
                    ? defaultStateValue()
                    : defaultStateValue;
        }
        var state = postState(v);
        if (state.valid) {
            return state.value;
        }
    }), innerValue = _c[0], setInnerValue = _c[1];
    useLayoutUpdateEffect(function () {
        var state = postState(value);
        if (state.valid) {
            setInnerValue(state.value);
        }
    }, [value]);
    var triggerChange = useEvent(function (newState, ignoreDestroy) {
        setInnerValue(newState, ignoreDestroy);
    });
    var isControlled = hasValue(value);
    return [
        innerValue,
        {
            isControlled: isControlled,
            update: function (value, option) {
                var state = postState(value, option);
                if (state.valid && state.value !== innerValue) {
                    triggerChange(state.value);
                    return { changed: true, newValue: state.value };
                }
                return { changed: false };
            },
        },
    ];
}
