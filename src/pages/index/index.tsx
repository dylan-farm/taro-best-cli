import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

interface TabItem {
  id: number;
  title: string
}
const tabs: Array<TabItem> = [
  {id: 0, title: '推荐歌单'},
  {id: 1, title: '最新单曲'},
  {id: 2, title: '新碟上架'},
]

interface IndexStates {
  activeTab: number;
  tabs: Array<TabItem>
}
class Index extends Component<{}, IndexStates> {
  state = {
    activeTab: 0,
    tabs: [...tabs]
  }
  render() {
    return (
      <View className='play-wrapper wrapper'>
        Index
      </View>
    )
  }
}

export default Index
