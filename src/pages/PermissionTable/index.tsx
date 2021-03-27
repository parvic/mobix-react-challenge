import { Checkbox, ListItem } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Module } from '../../components/Module';
import { getPermissions } from '../../utils/persistedState';

import * as S from "./style";

export function PermissionTable() {

  const [rootChecked, setRootChecked]  = useState({
    rootListing: true,
    rootDetails: true,
    rootCreate: true,
    rootEdit: true,
    rootRemove: true,
  });

  const { rootListing, rootDetails, rootCreate, rootEdit, rootRemove } = rootChecked;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRootChecked({ ...rootChecked, [event.target.name]: event.target.checked});
  };

  return (
    <S.Container>
      <h1>Tabela de Permissões</h1>
      <S.Permissions>
        <strong></strong>
        <strong>Ver Listagem</strong>
        <strong>Ver Detalhes</strong>
        <strong>Criar</strong>
        <strong>Editar</strong>
        <strong>Deletar</strong>
      </S.Permissions>

      <S.TableHeader>
        <ListItem>
          <strong>Todos</strong>
        </ListItem>
        <Checkbox 
          checked={rootListing}
          onChange={handleChange}
          name="rootListing"
          color="default"
        />
        <Checkbox 
          checked={rootDetails}
          onChange={handleChange}
          name="rootDetails"
          color="default"
        />
        <Checkbox 
          checked={rootCreate}
          onChange={handleChange}
          name="rootCreate"
          color="default"
        />
        <Checkbox 
          checked={rootEdit}
          onChange={handleChange}
          name="rootEdit"
          color="default"
        />
        <Checkbox 
          checked={rootRemove}
          onChange={handleChange}
          name="rootRemove"
          color="default"
        />
      </S.TableHeader>
      
      <Module 
        moduleTitle={'Análise'} 
        submoduleTitles={['Análise de contas', 'Análise de transações']} 
        rootChecked={rootChecked}
      />
      <Module 
        moduleTitle={'Contas'} 
        submoduleTitles={['Clientes', 'Transações', 'Contas digitais']} 
        rootChecked={rootChecked} 
      />
      <Module 
        moduleTitle={'Customização'} 
        submoduleTitles={['Limites e horários', 'Tarifas', 'Tarifas Personalizadas', 'Conta']} 
        rootChecked={rootChecked} 
      />
      <Module 
        moduleTitle={'Financeiro'} 
        submoduleTitles={['Entradas']} 
        rootChecked={rootChecked} 
      />

      <button type="button" onClick={getPermissions}>CADASTRAR</button>
    </S.Container>
  );
}