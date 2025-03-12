import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom"; // Importar Link para navegación interna
import "./Sidebar.css"; // Asegúrate de tener este archivo CSS con los estilos

export default function Sidebar1() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      {/* Botón para abrir el Sidebar */}
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sidebar-glass"
      >
        <div className="sidebar-content">
          {/* Header del Sidebar */}
          <div className="sidebar-header">
            <img
              src="/logo.png"
              alt="logo"
              className="sidebar-logo" // Aplicando la clase para el logo
            />
          </div>

          {/* Menú del Sidebar */}
          <div className="sidebar-menu">
            <ul>
              <li>
                <i className="pi pi-home"></i>
                <Link to='/Dashboard'>Dashboard</Link>
              </li>
              <li> 
                <i className="pi pi-users"></i>
                <Link to="/recursos-humanos">Recursos Humanos</Link>
              </li>
              <li>
                <i className="pi pi-wallet"></i>
                <Link to="/finanzas">Finanzas</Link>
              </li>
              <li>
                <i className="pi pi-shopping-cart"></i>
                <Link to="/ventas-crm">Ventas y CRM</Link>
              </li>
              <li>
                <i className="pi pi-shopping-bag"></i>
                <Link to="/compras">Compras</Link>
              </li>
              <li>
                <i className="pi pi-cog"></i>
                <Link to="/produccion">Producción</Link>
              </li>
              <li>
                <i className="pi pi-briefcase"></i>
                <Link to="/proyectos">Proyectos</Link>
              </li>
              <li>
                <i className="pi pi-info-circle"></i>
                <Link to="/Portafolio">Portafolio</Link>
              </li>
              <li>
                <i className="pi pi-cog"></i>
                <Link to="/configuracion">Configuración</Link>
              </li>
            </ul>
          </div>
          
          {/* Usuario en la parte inferior */}
          <div className="sidebar-footer">
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span>Amy Elsner</span>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
