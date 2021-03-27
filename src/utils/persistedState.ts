import React from "react";


const permissionArray = [
  "Análise de contas",
  "Análise de transações",
  "Clientes",
  "Transações",
  "Contas digitais",
  "Limites e horários",
  "Tarifas",
  "Tarifas Personalizadas",
  "Conta",
  "Entradas"
]

export const getPermissions = () => {
  permissionArray.map((permission) => {
    const storagedRepositories = localStorage.getItem(`@mobix:${permission}`)
    
    if(storagedRepositories) {
      console.log(permission)
      console.log(JSON.parse(storagedRepositories));
    } 
  });
}