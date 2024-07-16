import { InternalData, View, Page, ScrollView } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import AntPopup from '../../../src/Popup/index.axml';
import Switch from '../../../src/Switch/index.axml';

export default ({
  basicVisible,
  closeVisible,
  scrollVisible,
  position,
  animation,
}: InternalData) => (
  <Page>
    <AntPopup
      visible={basicVisible}
      height={250}
      width={250}
      position={position}
      animation={animation}
      onClose="handlePopupClose"
    >
      <View style="padding: 12px">
        从屏幕滑出或弹出一块自定义内容区，用于展示弹窗、信息提示、选择输入、切换等内容。
      </View>
    </AntPopup>
    <AntPopup
      visible={closeVisible}
      height={250}
      position="bottom"
      animation={animation}
      onClose="handlePopupClose"
    >
      <View style="padding: 12px">
        从屏幕滑出或弹出一块自定义内容区，用于展示弹窗、信息提示、选择输入、切换等内容。
      </View>
      <AntIcon
        style="position: absolute; right: 12px; top: 12px"
        type="CloseOutline"
        onTap="handlePopupClose"
      />
    </AntPopup>
    <AntPopup
      visible={scrollVisible}
      position="bottom"
      animation={animation}
      onClose="handlePopupClose"
    >
      <ScrollView
        scroll-y
        style="padding: 12px; height: 300px"
        disable-lower-scroll="out-of-bounds"
        disable-upper-scroll="out-of-bounds"
      >
        Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
        excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat
        eu mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco
        deserunt aute incididunt cillum tempor duis est. Elit voluptate laboris
        laborum anim exercitation consequat laboris ad. Quis ad enim fugiat.
        Aliqua reprehenderit irure non esse consequat laborum ea ut minim ex ea
        cillum. Dolore dolore proident laboris occaecat pariatur eu ad. Velit
        mollit aliqua do. Sunt enim tempor deserunt nostrud ut et. Sunt ad sit
        eiusmod ipsum ad non in sit veniam. Consectetur do id excepteur et aute.
        Commodo duis ea sit occaecat nisi dolore aliquip laborum esse minim.
        Officia veniam deserunt id cupidatat consectetur nisi cillum pariatur
        qui dolor veniam sit. Nostrud elit irure cupidatat esse ad ipsum.
        Consectetur culpa et et enim mollit officia in elit ipsum. Dolor et
        veniam labore excepteur magna magna in. Dolore voluptate eiusmod et.
        Esse fugiat irure excepteur duis tempor minim. Officia enim incididunt
        magna dolore exercitation occaecat et do et in duis deserunt excepteur.
        Cupidatat magna officia commodo reprehenderit anim qui laborum duis
        reprehenderit voluptate quis veniam. Consequat pariatur in magna Lorem
        eiusmod cupidatat qui est Lorem tempor qui anim aliquip duis. Laborum
        occaecat est laborum qui deserunt incididunt laborum cillum eu nostrud
        in deserunt culpa mollit. Nisi reprehenderit non duis qui elit eu dolore
        pariatur duis laboris exercitation minim nulla adipisicing et. Fugiat ad
        commodo enim eiusmod sint aliquip Lorem. Reprehenderit cillum dolor
        deserunt adipisicing commodo qui magna consectetur est ut Lorem sint.
        Cillum dolor enim incididunt excepteur cupidatat mollit deserunt
        deserunt ullamco cillum nostrud duis excepteur non. Excepteur sit
        consectetur ut laborum consequat culpa aute id aute et. Eiusmod Lorem
        esse pariatur culpa officia minim eu magna irure. Minim adipisicing quis
        excepteur irure est exercitation dolore exercitation id tempor fugiat
        pariatur eu Lorem. Nostrud incididunt laboris irure et aliqua
        reprehenderit anim enim occaecat aliqua. Nostrud adipisicing nisi enim
        aliqua enim sint sunt ad qui irure amet aute. Quis esse cillum commodo
        laboris adipisicing mollit cillum est amet velit cupidatat proident.
        Voluptate adipisicing dolore consequat officia culpa in fugiat
        consectetur velit. Minim ex aliqua proident irure. Aliquip magna
        reprehenderit laborum elit proident culpa sint occaecat sunt sint
        adipisicing adipisicing anim. Eu nisi anim in laboris voluptate. Sit
        ullamco adipisicing fugiat ad adipisicing excepteur esse exercitation
        nostrud ipsum nostrud. Deserunt sunt irure id mollit anim aliquip
        ullamco amet laborum nisi. Sit consequat consequat ullamco voluptate do
        sit nisi quis laboris tempor amet mollit sint. Incididunt mollit eu anim
        eiusmod ea cupidatat veniam aliquip. Tempor ea elit amet ea. Et proident
        occaecat id. Sunt sunt cillum ut sunt ea voluptate ea sit amet minim
        deserunt pariatur ullamco. Commodo nostrud excepteur non id dolore minim
        anim anim tempor qui duis. Quis occaecat pariatur reprehenderit anim
        reprehenderit cillum mollit aliqua sit anim cillum ut. Enim eiusmod quis
        sit consequat consectetur. Reprehenderit ex elit sit adipisicing dolor
        eiusmod occaecat duis culpa. Ex laboris exercitation occaecat
        exercitation commodo proident esse. Tempor voluptate mollit amet ex ea
        occaecat adipisicing. Minim quis voluptate labore reprehenderit commodo.
        Pariatur ex sit aliquip minim ea sunt. Lorem et velit veniam ut sunt
        deserunt mollit eu in nostrud tempor. Aliqua nisi duis duis excepteur et
        quis quis proident do cillum dolor. Labore cupidatat eiusmod voluptate
        cupidatat anim ad do pariatur sunt quis. Occaecat cillum eu non enim
        dolor nulla aliqua minim amet tempor irure reprehenderit reprehenderit
        laboris quis. Laboris ullamco excepteur ut fugiat sunt. Labore ex culpa
        incididunt sint minim velit sunt non et laborum consectetur eu. Ullamco
        magna dolore reprehenderit amet do. Nisi exercitation esse deserunt
        exercitation deserunt ex eu ea cillum magna adipisicing. Incididunt
        adipisicing aute voluptate deserunt fugiat nostrud nostrud. Id nostrud
        do cupidatat quis ea sint anim duis labore proident minim excepteur
        dolor proident elit.
      </ScrollView>
    </AntPopup>
    <Container title="弹出位置" className="list">
      <AntButton data-position="top" onTap="handleShowBasic">
        顶部弹出
      </AntButton>
      <AntButton data-position="bottom" onTap="handleShowBasic">
        底部弹出
      </AntButton>
      <AntButton data-position="left" onTap="handleShowBasic">
        左侧弹出
      </AntButton>
      <AntButton data-position="right" onTap="handleShowBasic">
        右侧弹出
      </AntButton>
      <AntButton onTap="handleShowClose">自定义弹窗内关闭</AntButton>
      <AntButton onTap="handleShowScroll">超长内容滚动</AntButton>
    </Container>
    <List>
      <ListItem>
        开启过渡动画
        <Switch
          slot="extra"
          checked={animation}
          onChange="handleChangeAnimation"
        />
      </ListItem>
    </List>
  </Page>
);
