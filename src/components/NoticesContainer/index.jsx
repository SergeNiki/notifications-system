import { useAtom } from 'jotai'
import { noticesAtom } from './../../store/noticeAtom'
import { Stack } from '@mui/material'
import Notice from './Notice'
import classes from './styles.module.css'

const NoticeContainer = () => {
  const [notices] = useAtom(noticesAtom)

  const alerts = notices.map(notice => {
    return <Notice key={notice.id} notice={notice} />
  })

  return <Stack className={classes.noticesWrap}>{alerts}</Stack>
}

export default NoticeContainer
