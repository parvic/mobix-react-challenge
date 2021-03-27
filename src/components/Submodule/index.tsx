import React, { ChangeEvent, useContext, useState, useEffect } from 'react';
import { ListItem, Checkbox } from '@material-ui/core';

import { ModuleContext } from "../../context/ModuleContext";

import * as S from "./style";

interface SubmoduleProps {
  title: string;
  moduleCheckedState: {
    moduleListing: boolean;
    moduleDetails: boolean;
    moduleCreate: boolean;
    moduleEdit: boolean;
    moduleRemove: boolean;
  }
}

export function Submodule(props: SubmoduleProps) {
  
  const [checked, setChecked]  = useState({
    listing: true,
    details: true,
    create: true,
    edit: true,
    remove: true,
  });

  const { listing, details, create, edit, remove } = checked;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked});
  };

  useEffect(() =>{
    setChecked({...checked, listing: props.moduleCheckedState.moduleListing})
  }, [props.moduleCheckedState.moduleListing])

  useEffect(() =>{
    setChecked({...checked, details: props.moduleCheckedState.moduleDetails})
  }, [props.moduleCheckedState.moduleDetails])

  useEffect(() =>{
    setChecked({...checked, create: props.moduleCheckedState.moduleCreate})
  }, [props.moduleCheckedState.moduleCreate])

  useEffect(() =>{
    setChecked({...checked, edit: props.moduleCheckedState.moduleEdit})
  }, [props.moduleCheckedState.moduleEdit])

  useEffect(() =>{
    setChecked({...checked, remove: props.moduleCheckedState.moduleRemove})
  }, [props.moduleCheckedState.moduleRemove])
  
  return (
    <S.Container>
      <ListItem>
        <p>{props.title}</p>
      </ListItem>
      <Checkbox 
        checked={listing}
        onChange={handleChange}
        name="listing"
        color="default"
      />
      <Checkbox 
        checked={details}
        onChange={handleChange}
        name="details"
        color="default"
      />
      <Checkbox 
        checked={create}
        onChange={handleChange}
        name="create"
        color="default"
      />
      <Checkbox 
        checked={edit}
        onChange={handleChange}
        name="edit"
        color="default"
      />
      <Checkbox 
        checked={remove}
        onChange={handleChange}
        name="remove"
        color="default"
      />
    </S.Container>
  );
}