import React, { useState } from 'react';
import { List, ListItem, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import * as S from "./style";

export function Submodule() {

  const [expandList, setExpandList] = useState(true);

  function handleClick() {
    setExpandList(!expandList);
  }

  return (
    <S.Container>
      <List>
        <ListItem button onClick={handleClick}>
          <p>Submodule</p>
          {expandList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
    </S.Container>
  );
}