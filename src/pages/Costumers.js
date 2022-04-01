import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import CostumerCard from '../components/CostumerCard'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2),
    },
  }))


const Costumers = () => {
    const classes = useStyles()
    const [costumers, setCostumers] = useState([])


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const {data} = response.data

            setCostumers(data)  
        })
    }, [])

    const handleRemoveCostumer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {

            const newCostumersState = costumers.filter(costumers => costumers.id !== id)

            setCostumers(newCostumersState)
        })
    }
    
    return (
    <Grid container>
        {
           costumers.map(item => (
                <Grid item xs={12} md={4}>
                    <CostumerCard 
                    id={item.id}
                    name={item.first_name}
                    lastname={item.last_name}
                    email={item.email}
                    avatar={item.avatar}
                    className={classes.card}
                    onRemoveCostumer={handleRemoveCostumer}
                    />
                </Grid>
            ))
        }
        </Grid>
        
    )
  }
  
  export default Costumers
