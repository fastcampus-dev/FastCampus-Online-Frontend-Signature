import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import CenterBody from './components/CenterBody';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <Create />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}


export default App;
