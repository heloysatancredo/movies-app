import React from 'react'
import IMG_URL from '../config/img_config'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CardContent } from '@material-ui/core'

const getStyles = makeStyles(() => ({
  media: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minWidth: '230px',
    height: 'auto',
    backgroundPosition: 'left',
  },
  title: {
    padding: '0',
    textAlign: 'center',
  },
  subTitle: {
    color: 'gray',
    fontSize: '14px',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
}))

const ResultCard = (props) => {
  const classes = getStyles()
  const { id, title, image } = props
  let imgUrl = IMG_URL + image

  return (
    <Card className={'cardResult'} key={id}>
      <CardMedia className={classes.media} image={imgUrl} />
      <CardContent className={classes.content}>
        <CardHeader className={classes.title} title={title} />
        <Typography className={classes.subTitle}>
          Release Date: {props.release_date}| Popularity: {props.popularity}
        </Typography>
        <Typography>{props.overview}</Typography>
      </CardContent>
    </Card>
  )
}

export default ResultCard
