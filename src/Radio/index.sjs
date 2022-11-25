function getClassName(checked, disabled) {
  if (!checked && !disabled) {
    return 'icon';
  }
  if (checked && !disabled) {
    return 'checkedIcon';
  }
  if (!checked && disabled) {
    return 'disbaledIcon';
  }
  if (checked && disabled) {
    return 'disabledCheckedIcon';
  }
}

function getChecked(index, options, value) {
  if (options[index].value === value) {
    return true;
  };
  return false;
}

function getValue(hasChange, value, defaultValue) {
  if (hasChange || typeof value !== 'undefined') {
    return value;
  }
 return defaultValue;
}

export default { getClassName, getChecked, getValue };
