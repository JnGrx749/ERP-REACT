import React from 'react'; 
import { Card } from 'primereact/card';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './Clientes.css';  // Asegúrate de incluir el archivo de estilos

export default function Kpi3() {

    // Datos de la gráfica (Tasa de Rotación de Empleados)
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Tasa de Rotación de Empleados (%)',
                data: [5, 5.71, 6.36, 3.48, 6.67, 8],
                borderColor: '#dc3545', // Color de la línea (rojo)
                backgroundColor: 'rgba(214, 220, 53, 0.2)', // Color translúcido de fondo
                fill: true, // Rellenar bajo la línea
                tension: 0.4 // Curvatura de la línea
            }
        ]
    };

    return (
        <div className="card flex justify-content-center"> {/* Alineado con el estilo de Cliente */}
            <Card 
                title="Tasa de Rotación de Empleados" 
                className="shadow-3 p-3 border-round-lg" // Usando las mismas clases de estilo
                style={{ 
                    maxWidth: '600px', 
                    backgroundColor: '#f8f9fa', 
                    color: '#343a40', 
                    borderRadius: '8px', 
                    padding: '20px' 
                }}
            >
                <div className="mt-4">
                    {/* Gráfica de Tasa de Rotación de Empleados */}
                    <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </Card>
        </div>
    );
}
