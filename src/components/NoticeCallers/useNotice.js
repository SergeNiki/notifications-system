import { useAtom } from 'jotai'
import { addNoticeAtom } from '../../store/noticeAtom'

const useNotice = () => {
  const [, addNotice] = useAtom(addNoticeAtom)
  
  const error = (text, title) => {
    addNotice({ type: 'error', text, title })
  }
  const info = (text, title) => {
    addNotice({ type: 'info', text, title })
  }
  const warning = (text, title) => {
    addNotice({ type: 'warning', text, title })
  }
  const success = (text, title) => {
    addNotice({ type: 'success', text, title })
  }

  return {
    error,
    info,
    warning,
    success,
  }
}

export default useNotice
