import { useSelector } from 'react-redux'
import ChatArea from './components/Chat/ChatArea'
import SideBar from './components/SideBar/SideBar'

const App = () => {
  const currentChannel = useSelector(state => state.channels.currentChannel);
  return (
    <div className='relative h-full min-h-screen md:flex '>
      <SideBar />

      {currentChannel && <ChatArea currentChannel={currentChannel} />}
    </div>
  )
}

export default App