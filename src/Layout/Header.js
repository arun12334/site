import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Card, CardContent   } from '@mui/material';
import { Link } from 'react-router-dom'

function HeaderPage() {
  return (
    <div>
<Card>
<CardContent>
<Button  variant="contained"  size="large" color="success">
ANTLAB
</Button > 
    <Stack spacing={4} direction="row" className='header'>
     <Link to="/"> <Button    variant="contained"   > Home </Button></Link>
     <Link to="/about" ><Button variant="contained">ABOUT</Button></Link>
     <Link to="/service" >  <Button variant="contained">SERIVCE</Button></Link>
     <Link to="/contact" > <Button variant="contained">CONTACT</Button></Link>
     <Link to="/help" >  <Button variant="contained">HELP</Button></Link>
    </Stack>
    
    </CardContent>

    </Card>

    </div>
  )
}

export default HeaderPage