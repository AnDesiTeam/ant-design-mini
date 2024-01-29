import { View, Page, InternalData } from 'tsxml';
import SwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">去除松开手之后的滑动回弹效果</View>
        {/* 提示：需要给t-swipe-item-con设置固定的高宽 */}
        {Array.from({ length: 10 }, (_, index) => (
          <View class="t-swipe-item-con" key={index}>
            {/* 提示：右侧只有一个按钮的情况下建议把elasticity设为false */}
            <SwipeAction
              data-item={index}
              rightButtons={rightBtns}
              elasticity={false}
              swiped={swipeIndex === index}
              onSwipeEnd="onSwipeEnd"
              onSwipeStart="onSwipeStart"
              onButtonTap="onButtonTap"
            >
              <View class="t-swipe-item-con-view">右侧-三个按钮</View>
            </SwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
