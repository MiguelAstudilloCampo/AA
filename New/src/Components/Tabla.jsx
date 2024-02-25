import React from 'react';
import "./Style/Tabla.css"

const Tabla = () => {
    return (
        <div className='container-tabla'>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Descripcion</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Miguel</td>
                        <td>Astudillo</td>
                        <td>Hola Mundo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
