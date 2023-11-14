import { Button, View, TSXMLProps, Slot } from 'tsxml';
import AntIcon from '../Icon/index.axml';
import Loading from '../Loading/index.axml';
import utils from './index.sjs';
import { IButtonProps } from './props';

export default ({
  formType,
  loading,
  type,
  activeClassName,
  scope,
  onTap,
  catchTap,
  publicId,
  openType,
  inline,
  size,
  danger,
  disabled,
  className,
  style,
  icon,
  subText,
}: TSXMLProps<IButtonProps>) => (
  <Button
    form-type={formType}
    hover-class={utils.getHoverClass(loading, type, activeClassName)}
    scope={scope}
    /// #if ALIPAY
    onTap={onTap ? 'onTap' : ''}
    onGetAuthorize="onGetAuthorize"
    onFollowLifestyle="onFollowLifestyle"
    onError="onError"
    onGetUserInfo="onGetUserInfo"
    onGetPhoneNumber="onGetPhoneNumber"
    catchTap={catchTap ? 'catchTap' : ''}
    /// #endif

    /// #if WECHAT
    bindgetuserinfo="onGetUserInfo"
    bindcontact="onContact"
    bindgetphonenumber="onGetPhoneNumber"
    bindgetrealtimephonenumber="onGetRealTimePhoneNumber"
    binderror="onError"
    bindlaunchapp="onLaunchApp"
    bindopensetting="onOpenSetting"
    bindagreeprivacyauthorization="onAgreePrivacyAuthorization"
    bindchooseavatar="onChooseAvatar"
    /// #endif

    public-id={publicId}
    open-type={openType}
    class={`ant-button ${
      inline ? 'ant-button-inline ' + utils.getClass(size) : ''
    } ${'ant-button-' + type + (danger ? '-danger' : '')} ${
      disabled || loading ? 'ant-button-disabled' : ''
    } ${className ? className : ''}`}
    style={style}
  >
    <View class="ant-button-wrap">
      {!!icon && <AntIcon type={icon} />}
      <View
        class={`ant-button-content-text ${
          icon ? 'ant-button-content-text-margin' : ''
        }`}
      >
        <Slot />
        {!inline && subText && (
          <View class="ant-button-content-subtext">{subText}</View>
        )}
      </View>
      {loading && (
        <View class="ant-button-content-loading-container">
          <Loading
            type="mini"
            color="currentColor"
            className="ant-button-content-loading"
          />
        </View>
      )}
    </View>
  </Button>
);
