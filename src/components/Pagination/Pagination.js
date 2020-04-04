import React, { Component } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'

const PaginationExampleControlled = ({ activePage, onPageChange, totalPages }) => {
  return (
    <Grid columns={1} verticalAlign='middle'>
      <Grid.Column>
        <Pagination
          activePage={activePage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </Grid.Column>
    </Grid>
  )
}

export default PaginationExampleControlled