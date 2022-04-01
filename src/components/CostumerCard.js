import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
}))

const CostumerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCostumer,
}) => {
    const classes = useStyles()

const [openModal, setOpenModal] = useState(false)

const handleToggleOpenModal = () => {
  setOpenModal(!openModal)
}

const handleConfirmModal = id => {
  onRemoveCostumer(id)
  handleToggleOpenModal()
}

const handleRemoveCostumer = () => {
  handleToggleOpenModal()
}

  return (
    <>
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="editar cadastro">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="remover cadastro" onClick={handleRemoveCostumer}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    <ModalConfirm
    open={openModal}
    onClose={handleToggleOpenModal}
    onConfirm={() => handleConfirmModal(id)} />
    </>
  )
}

export default CostumerCard