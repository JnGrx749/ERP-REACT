import React from 'react'; 
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Card } from 'primereact/card';
import './Clientes.css';  // Asegúrate de que tu archivo de estilos esté correctamente incluido

export default function Kpi2() {

    // Datos de la gráfica
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Tasa de Conversión (%)',
                data: [5, 5, 6, 7, 6.67, 8],
                borderColor: '#007bff',
                backgroundColor: 'rgba(255, 0, 30, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    return (
        <div className="card flex justify-content-center"> {/* Ajustamos la clase para que se alinee con el estilo de Cliente */}
            <Card 
                title="Tasa de Conversión (%)" 
                className="shadow-3 p-3 border-round-lg" // Usamos clases de estilo como en Cliente
                style={{ maxWidth: '600px', backgroundColor: '#f8f9fa', color: '#343a40' }} // Estilos similares a Cliente
            >
                <div className="mt-4">
                    <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </Card>
        </div>
    );
}
