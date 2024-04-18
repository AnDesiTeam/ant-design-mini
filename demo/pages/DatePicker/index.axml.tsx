import { InternalData, Page } from 'tsxml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntDatePicker from '../../../src/DatePicker/index.axml';
import AntRangePicker from '../../../src/DatePicker/RangePicker/index.axml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({
  pickerVisible,
  dateRangePickerVisible,
  min,
  max,
  defaultDateRange,
  defaultDate,
  handleFormatLabel,
  controlledDateRange,
}: InternalData) => (
  <Page>
    <AntList header="基础用法">
      <AntListItem>
        请选择日期
        <AntDatePicker
          min={min}
          max={max}
          slot="extra"
          defaultValue={defaultDate}
          placeholder="请选择"
          onPickerChange="handlePickerChange"
          onVisibleChange="handleTriggerPicker"
          onCancel="handleDismiss"
          onOk="handleOk"
        ></AntDatePicker>
      </AntListItem>
      <AntListItem>
        请选择日期（点击蒙层不关闭）
        <AntDatePicker
          min={min}
          max={max}
          slot="extra"
          defaultValue={defaultDate}
          placeholder="请选择"
          onPickerChange="handlePickerChange"
          onVisibleChange="handleTriggerPicker"
          maskClosable={false}
          onOk="handleOk"
        ></AntDatePicker>
      </AntListItem>
    </AntList>
    <AntList header="选择精度">
      <AntListItem>
        请选择年度
        <AntDatePicker
          slot="extra"
          precision="year"
          format="YYYY"
          placeholder="选择"
          onOk="handleOk"
        />
      </AntListItem>
      <AntListItem>
        请选择月份
        <AntDatePicker
          slot="extra"
          precision="month"
          format="YYYY-MM"
          placeholder="选择"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
        />
      </AntListItem>
      <AntListItem>
        请选择时间
        <AntDatePicker
          slot="extra"
          precision="minute"
          format="YYYY-MM-DD HH:mm"
          placeholder="选择"
          onVisibleChange="handleTriggerPicker"
          onOk="handleOk"
        />
      </AntListItem>
    </AntList>
    <AntList header="禁用状态">
      <AntListItem>
        请选择日期
        <AntDatePicker
          slot="extra"
          defaultValue={defaultDate}
          disabled
        ></AntDatePicker>
      </AntListItem>
    </AntList>
    <AntList header="自定义每列的渲染内容">
      <AntListItem>
        每列不显示单位
        <AntDatePicker
          min={min}
          max={max}
          slot="extra"
          defaultValue={defaultDate}
          placeholder="请选择"
          onPickerChange="handlePickerChange"
          onVisibleChange="handleTriggerPicker"
          onCancel="handleDismiss"
          onOk="handleOk"
          onFormatLabel={
            handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'
          }
        ></AntDatePicker>
      </AntListItem>
    </AntList>
    <AntList header="时间范围选择">
      <AntListItem>
        日期范围
        <AntRangePicker
          slot="extra"
          placeholder="请选择"
          defaultValue={defaultDateRange}
          onPickerChange="handlePickerRangeChange"
          onVisibleChange="handleTriggerPicker"
          onOk="handleRangeOk"
        ></AntRangePicker>
      </AntListItem>
      <AntListItem>
        受控模式
        <AntRangePicker
          slot="extra"
          placeholder="请选择"
          value={controlledDateRange}
          onOk="handleControlledRangeOk"
        ></AntRangePicker>
      </AntListItem>
      <AntListItem>
        每列不显示单位
        <AntRangePicker
          slot="extra"
          placeholder="请选择"
          defaultValue={defaultDateRange}
          onPickerChange="handlePickerRangeChange"
          onVisibleChange="handleTriggerPicker"
          onOk="handleRangeOk"
          onFormatLabel={
            handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'
          }
        ></AntRangePicker>
      </AntListItem>
    </AntList>
    <AntContainer style="margin-top:20rpx;">
      <AntList header="外部控制选择器是否显示">
        <AntListItem>
          请选择时间
          <AntDatePicker
            min={min}
            max={max}
            slot="extra"
            visible={pickerVisible}
            defaultValue={defaultDate}
            placeholder="请选择"
            onPickerChange="handlePickerChange"
            onVisibleChange="handleTriggerControlledPicker"
            onCancel="handleDismiss"
            onOk="handleOk"
          ></AntDatePicker>
        </AntListItem>
      </AntList>

      <AntButton size="medium" type="primary" onTap="handleOpenPicker">
        打开 DatePicker
      </AntButton>
    </AntContainer>
    <AntContainer style="margin-top:20rpx;">
      <AntList header="外部控制日期范围选择器是否显示">
        <AntListItem>
          请选择日期范围
          <AntRangePicker
            slot="extra"
            visible={dateRangePickerVisible}
            placeholder="请选择"
            defaultValue={defaultDateRange}
            onPickerChange="handlePickerRangeChange"
            onVisibleChange="handleTriggerControlledDateRangePicker"
            onOk="handleRangeOk"
          ></AntRangePicker>
        </AntListItem>
      </AntList>

      <AntButton size="medium" type="primary" onTap="handleOpenDateRangePicker">
        打开 DateRangePicker
      </AntButton>
    </AntContainer>
  </Page>
);
