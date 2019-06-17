import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Action from "@/utils/action";
import "./index.scss";
import { connect } from "@tarojs/redux";
import Panel from "@/components/panel";
import HorizonList from "@/components/horizon-list";
import FakeSearchBar from "@/components/fake-search-bar";

interface TabItem {
  id: number;
  title: string;
}

interface IndexItemProps {
  id: any;
  image: string;
  title: string;
  author: string;
};
interface IndexStates {
  activeTab: number;
  tabs: Array<TabItem>;
}
interface IndexProps {
  newBooks: Array<IndexItemProps>;
  hotBooks: Array<IndexItemProps>;
  recommendBooks: Array<IndexItemProps>;
  dispatch: any;
}

@connect(({ home }) => ({
  ...home
}))
class Index extends Component<IndexProps, IndexStates> {
  config = {
    navigationBarTitleText: "首页"
  };
  componentDidMount() {
    this.init();
  }
  init() {
    const { dispatch } = this.props;
    dispatch(Action("home/getNewBooks"));
    dispatch(Action("home/getHotBooks"));
    dispatch(Action("home/getRecommendBooks"));
  }

  static defaultProps = {
    newBooks: [],
    hotBooks: [],
    recommendBooks: [],
    dispatch: () => {}
  };

  render() {
    return (
      <View className="play-wrapper wrapper">
        <FakeSearchBar />
        <Panel title="新书速递" className="panel--first">
          <HorizonList data={this.props.newBooks} />
        </Panel>
        <Panel title="近期热门" className="margin-top-lg">
          <HorizonList data={this.props.hotBooks} />
        </Panel>
        <Panel title="为你推荐" className="margin-top-lg">
          <HorizonList data={this.props.recommendBooks} />
        </Panel>
      </View>
    );
  }
}

export default Index;
