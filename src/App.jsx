import './App.css'
import NoticeContainer from './components/NoticesContainer'
import SuccessNoticeCaller from './components/NoticeCallers/SuccessNoticeCaller'
import ErrorNoticeCaller from './components/NoticeCallers/ErrorNoticeCaller'
import Dialogs from './components/Dialogs'

function App() {
  return (
    <>
      <NoticeContainer />
      <Dialogs />
      <SuccessNoticeCaller />
      <ErrorNoticeCaller />
    </>
  )
}

export default App
