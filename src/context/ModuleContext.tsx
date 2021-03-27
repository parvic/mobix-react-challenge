import { createContext, ReactNode, useState } from "react";

interface ModuleContextData {
  submoduleChecked: {
    submoduleListing: boolean;
    submoduleDetails: boolean;
    submoduleCreate: boolean;
    submoduleEdit: boolean;
    submoduleRemove: boolean;
  },
  handleSubmoduleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ModuleProviderProps {
  children: ReactNode,
}

export const ModuleContext = createContext({} as ModuleContextData)

export function ModuleProvider({ children }: ModuleProviderProps) {

  const [rootChecked, setRootChecked] = useState({
    rootlisting: true,
    rootDetails: true,
    rootCreate: true,
    rootEdit: true,
    rootRemove: true,
  })

  const [moduleChecked, setModuleChecked] = useState({
    modulelisting: true,
    moduleDetails: true,
    moduleCreate: true,
    moduleEdit: true,
    moduleRemove: true,
  })

  const [submoduleChecked, setSubmoduleChecked]  = useState({
    submoduleListing: false,
    submoduleDetails: true,
    submoduleCreate: true,
    submoduleEdit: true,
    submoduleRemove: true,
  });
  
  const handleSubmoduleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmoduleChecked({ ...submoduleChecked, [event.target.name]: event.target.checked });
    console.log({[event.target.name]: event.target.checked})
  };

  return  (
  <ModuleContext.Provider value={{submoduleChecked, handleSubmoduleChange}}>
      {children}
    </ModuleContext.Provider>
  );

}