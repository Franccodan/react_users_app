import React from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,

} from '@material-ui/core'


const ModalConfirm = ({ 
    open, 
    onClose, 
    onConfirm,      
    title,
    message,
}) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseja realmente excluir este cadastro?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Ao confirmar não será possível reverter esta ação.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
              Cancelar
            </Button>
          <Button onClick={onConfirm} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      </>
  )
}

export default ModalConfirm