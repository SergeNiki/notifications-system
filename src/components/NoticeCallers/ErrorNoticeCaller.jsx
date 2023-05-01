// import { useAtom } from 'jotai'
// import { addNoticeAtom } from '../../store/noticeAtom'
import useNotice from './useNotice'

const ErrorNoticeCaller = () => {
  //   const [, addNotice] = useAtom(addNoticeAtom)
  const notice = useNotice()

  const handleAddNotice = () => {
    notice.error("I don't fucking know what is it!!!", 'Some error!')
  }

  return (
    <div>
      <button onClick={handleAddNotice}>add error notice</button>
    </div>
  )
}

export default ErrorNoticeCaller
