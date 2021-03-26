import React from 'react';
import { Submodule } from '../../components/Submodule';

import * as S from "./style";

export function PermissionTable() {
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

      <Submodule />

      <button type="button">CADASTRAR</button>
    </S.Container>
  );
}