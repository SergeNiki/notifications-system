import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { removeNoticeAtom } from './../../store/noticeAtom'

const useNotice = id => {
  const [isDrop, setIsDrop] = useState(true)
  const [marginBottom, setMarginBottom] = useState('15px')
  const [, removeNotice] = useAtom(removeNoticeAtom)

  const handleRemove = useCallback(() => {
    setIsDrop(true)
    setMarginBottom('opx')
    setTimeout(() => {
      removeNotice(id)
    }, 700)
  }, [id, removeNotice])

  useEffect(() => {
    setIsDrop(false)
    setTimeout(() => {
      handleRemove()
    }, 5000)
  }, [handleRemove])

  return {
    isDrop,
    styles: {
      opacity: Number(!isDrop),
      marginBottom,
    },
    handleRemove,
  }
}

export default useNotice
