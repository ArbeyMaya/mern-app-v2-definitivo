import React from "react"
import {Tab} from "semantic-ui-react"
import { iconLogo } from "../../../assets"
import "./Auth.scss"

export function Auth() {

  const panes = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
          <h2>Login Form</h2>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Nuevo Usuario",
      render: () => (
        <Tab.Pane>
          <h2>Register Form</h2>
        </Tab.Pane>
      )
    }
  ]

  return (
    <div className="auth">
      <img src={iconLogo} className="logo" />
      <Tab panes={panes} className="auth__forms"/>
    </div>
  )
}
