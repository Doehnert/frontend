import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="div" >
              <Link to={'/signup'}>Cadastrar novo cidadão</Link>
            </Typography>
            <Typography variant="h6" component="div" >
              <Link to={'/finduser'}>Pesquisar NIS</Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}