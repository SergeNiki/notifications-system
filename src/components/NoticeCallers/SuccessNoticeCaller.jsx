// import { useAtom } from 'jotai'
// import { addNoticeAtom } from '../../store/noticeAtom'
import useNotice from './useNotice'

const SuccessNoticeCaller = () => {
  // const [, addNotice] = useAtom(addNoticeAtom)
  const { success } = useNotice()

  const handleAddNotice = () => {
    success('Evrything good! Calm down!', 'Это успех!')
  }

  return (
    <div>
      <button onClick={handleAddNotice}>add success notice</button>
    </div>
  )
}

export default SuccessNoticeCaller
