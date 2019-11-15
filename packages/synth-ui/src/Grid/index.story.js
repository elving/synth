import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import React from 'react'
import styled from 'styled-components'

import Grid, { GridItem } from './index'

const Box = styled.div`
  background-color: ${({ color }) => color};
  text-align: center;
  padding: 14px;
  width: 100%;
`

storiesOf('Grid', module)
  .addDecorator(centered)
  .add('default', () => (
    <div style={{ width: 520 }}>
      <Grid columns={4}>
        <GridItem>
          <Box color="Silver">First</Box>
        </GridItem>
        <GridItem>
          <Box color="DarkGrey">Second</Box>
        </GridItem>
        <GridItem>
          <Box color="Grey">Third</Box>
        </GridItem>
        <GridItem>
          <Box color="DimGrey">Fourth</Box>
        </GridItem>
      </Grid>

      <Grid columns={3}>
        <GridItem>
          <Box color="Silver">First</Box>
        </GridItem>
        <GridItem>
          <Box color="DarkGrey">Second</Box>
        </GridItem>
        <GridItem>
          <Box color="Grey">Third</Box>
        </GridItem>
      </Grid>

      <Grid columns={2}>
        <GridItem>
          <Box color="Silver">First</Box>
        </GridItem>
        <GridItem>
          <Box color="DarkGrey">Second</Box>
        </GridItem>
      </Grid>

      <Grid columns={1}>
        <GridItem>
          <Box color="Silver">First</Box>
        </GridItem>
      </Grid>
    </div>
  ))
  .add('grid item wrapping', () => (
    <div style={{ width: 520 }}>
      <Grid columns={2}>
        <GridItem>
          <Box color="Silver">First</Box>
        </GridItem>
        <GridItem>
          <Box color="DarkGrey">Second</Box>
        </GridItem>
        <GridItem>
          <Box color="Grey">Third</Box>
        </GridItem>
        <GridItem>
          <Box color="DimGrey">Fourth</Box>
        </GridItem>
        <GridItem>
          <Box color="Silver">Fifth</Box>
        </GridItem>
      </Grid>
    </div>
  ))
