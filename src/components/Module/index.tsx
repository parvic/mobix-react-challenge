import React, { useState, useEffect } from 'react';
import { List, ListItem, Collapse, Checkbox } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";


import * as S from "./style";
import { Submodule } from '../Submodule';

interface ModuleProps {
  moduleTitle: string;
  submoduleTitles: string[];
  rootChecked: {
    rootListing: boolean;
    rootDetails: boolean;
    rootCreate: boolean;
    rootEdit: boolean;
    rootRemove: boolean;
  }
}

export function Module(props: ModuleProps) {

  const [expandList, setExpandList] = useState(true);
  const [moduleChecked, setModuleChecked]  = useState({
    moduleListing: true,
    moduleDetails: true,
    moduleCreate: true,
    moduleEdit: true,
    moduleRemove: true,
  });

  const { moduleListing, moduleDetails, moduleCreate, moduleEdit, moduleRemove } = moduleChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModuleChecked({ ...moduleChecked, [event.target.name]: event.target.checked });
  };

  useEffect(() =>{
    setModuleChecked({...moduleChecked, moduleListing: props.rootChecked.rootListing})
  }, [props.rootChecked.rootListing]);

  useEffect(() =>{
    setModuleChecked({...moduleChecked, moduleDetails: props.rootChecked.rootDetails})
  }, [props.rootChecked.rootDetails]);

  useEffect(() =>{
    setModuleChecked({...moduleChecked, moduleCreate: props.rootChecked.rootCreate})
  }, [props.rootChecked.rootCreate]);

  useEffect(() =>{
    setModuleChecked({...moduleChecked, moduleEdit: props.rootChecked.rootEdit})
  }, [props.rootChecked.rootEdit]);

  useEffect(() =>{
    setModuleChecked({...moduleChecked, moduleRemove: props.rootChecked.rootRemove})
  }, [props.rootChecked.rootRemove]);
  
  function handleClick() {
    setExpandList(!expandList);
  }

  return (
    <S.Container>
      <List disablePadding={true}>
        
        <S.ModuleWrapper>
          <ListItem button onClick={handleClick}>
            <strong>
              {props.moduleTitle}
            </strong>
            {expandList ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Checkbox 
            checked={moduleListing}
            onChange={handleChange}
            name="moduleListing"
            color="default"
          />
          <Checkbox 
            checked={moduleDetails}
            onChange={handleChange}
            name="moduleDetails"
            color="default"
          />
          <Checkbox 
            checked={moduleCreate}
            onChange={handleChange}
            name="moduleCreate"
            color="default"
          />
          <Checkbox 
            checked={moduleEdit}
            onChange={handleChange}
            name="moduleEdit"
            color="default"
          />
          <Checkbox 
            checked={moduleRemove}
            onChange={handleChange}
            name="moduleRemove"
            color="default"
          />
        </S.ModuleWrapper>

        <Collapse in={expandList} timeout="auto" unmountOnExit>
          <List>
            {props.submoduleTitles.map((submoduleTitle) => {
              return (
                <Submodule key={submoduleTitle} title={submoduleTitle} moduleCheckedState={moduleChecked}/>
              )})
            }
          </List>
        </Collapse>
      </List>
    </S.Container>
  );
}