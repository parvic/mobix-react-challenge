import React from 'react';
import { ModuleProvider } from './context/ModuleContext';
import { PermissionTable } from './pages/PermissionTable';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <ModuleProvider>
      <PermissionTable />
      <GlobalStyles />
    </ModuleProvider>
  );
}

export default App;
