import { atom } from 'jotai'

const addNotice = (notices, noticeData) => {
  const newNotice = {
    type: 'info',
    text: '',
    title: '',
    onClickOk: () => {},
    ...noticeData,
    id: Date.now() + Math.random(),
  }
  return [newNotice, ...notices]
}
const removeNotice = (notices, id) => {
  return notices.filter(notice => notice.id !== id)
}

export const hasNoticeAtom = atom(get => !!get(noticesAtom).length)
export const noticesAtom = atom([])

export const addNoticeAtom = atom(null, (get, set, noticeData) => {
  set(noticesAtom, addNotice(get(noticesAtom), noticeData))
})
export const removeNoticeAtom = atom(null, (get, set, id) => {
  set(noticesAtom, removeNotice(get(noticesAtom), id))
})
