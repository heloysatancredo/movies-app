import React from 'react'
import ResultCard from './ResultCard'
import Card from '@material-ui/core/Card'

const Results = (props) => {
  return (
    <div>
      {props.results.map((element) => {
        const {
          id,
          title,
          poster_path,
          name,
          popularity,
          overview,
          release_date,
          first_air_date,
        } = element

        return (
          <Card key={id}>
            <ResultCard
              title={title ? title : name}
              image={poster_path}
              release_date={release_date ? release_date : first_air_date}
              popularity={popularity}
              overview={overview}
            />
          </Card>
        )
      })}
    </div>
  )
}

export default Results
