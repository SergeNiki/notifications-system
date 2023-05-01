import { Alert, AlertTitle } from '@mui/material'
import useNotice from './useNotice'
import classes from './styles.module.css'
import { Collapse } from '@mui/material'

// eslint-disable-next-line
const Notice = ({ notice }) => {
  const { isDrop, styles, handleRemove } = useNotice(notice.id)

  return (
    <Collapse in={!isDrop}>
      <Alert
        className={classes.notice}
        variant='filled'
        severity={notice.type}
        sx={{ ...styles }}
        onClose={handleRemove}
      >
        <AlertTitle>{notice?.title}</AlertTitle>
        {notice.text}
      </Alert>
    </Collapse>
  )
}

export default Notice
