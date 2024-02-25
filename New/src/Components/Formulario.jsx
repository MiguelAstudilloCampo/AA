import React from 'react';
import "./Style/Formulario.css"

const Formulario = () => {
    return (
<div class="container">
            <h1 class="Titulo">Registro Personas</h1>
            <form class="formulario">
                <div class="Content" >
                    <label >Id</label>
                    <input class="form-control" placeholder="Id"/>
                </div>
                <div class="Content" >
                    <label >Nombre</label>
                    <input class="form-control" placeholder="Nombre" />
                </div>
                <div class="Content">
                    <label>Apellido</label>
                    <input class="form-control" placeholder="Apellido" />
                </div>
                <div class="Content">
                    <label>Correo Electronico</label>
                    <input type="email" class="form-control" placeholder="Correo electronico" />
                </div>
                <div class="Botones">
                    <button class="b1">Agregar</button>
                    <button class="b2">Consultar</button>
                    <button class="b3">Actualizar</button>
                    <button class="b4">Eliminar</button>
                  </div>

            </form>
            </div>
    );
}

export default Formulario;
