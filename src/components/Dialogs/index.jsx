import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useState } from 'react'
import useNotice from '../NoticeCallers/useNotice'

const Dialogs = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { success, info, warning } = useNotice()

  const handlerClickOk = () => {
    setIsOpen(false)
    success('You clicked on OK button', 'Successfull')
  }
  const handleClickCancel = () => {
    setIsOpen(false)
    info('You canceled the confirm action', 'Information')
  }
  const handleClickBackSide = () => {
    setIsOpen(false)
    warning('You miss clicked!')
  }

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>call alert dialog</button>
      </div>
      <Dialog open={isOpen} onClose={handleClickBackSide}>
        <DialogTitle>Hahahha</DialogTitle>
        <DialogContent>asf sdf sdf dfgsdgf gd f</DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancel}>cancel</Button>
          <Button onClick={handlerClickOk}>ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Dialogs
