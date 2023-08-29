import React from 'react'

import { Grid } from '@mui/material'
import { Button } from '@mui/material'

function Edit(props) {
  const { element, update, component, sx, sendMessage } = props

  const [aceDialogValue, setAceDialogValue] = React.useState()

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <Button fullWidth variant='outlined' onClick={() => setAceDialogValue(true)}>Value</Button>
    </Grid>
    {
      aceDialogValue ?
        <component.AceDialog
          value={JSON.stringify(value.value, null, 2)}
          onChange={v => { element.property.value = JSON.parse(v); update(); setAceDialogValue(); }}
          onClose={() => setAceDialogValue()}
          mode='html'
        />
        : null
    }
  </Grid >
}

export default Edit