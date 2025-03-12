import React from 'react'; 
import { Card } from 'primereact/card';
import 'chart.js/auto'; // Importamos Chart.js
import { Bar } from 'react-chartjs-2'; // Importamos la gráfica de barras
import './Clientes.css'; // Asegúrate de que el archivo CSS esté importado

export default function Kpi4() {
    // Datos de la gráfica de barras
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Ventas Mensuales (USD)',
                data: [5000, 6000, 7000, 8000, 6500, 7200], // Datos de ventas
                backgroundColor: '#28a745', // Color de fondo de las barras
                borderColor: '#155d27', // Color de borde de las barras
                borderWidth: 1,
            }
        ]
    };

    return (
        <div className="card flex justify-content-center"> {/* Usamos flex para centrar la tarjeta */}
            <Card 
                title="Ventas Mensuales (USD)" 
                className="shadow-3 p-3 border-round-lg" // Estilo similar al de las otras tarjetas
                style={{ 
                    maxWidth: '600px', 
                    backgroundColor: '#f8f9fa', 
                    color: '#343a40', 
                    borderRadius: '8px', 
                    padding: '20px' 
                }}
            >
                <div className="mt-4">
                    {/* Gráfica de barras */}
                    <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </Card>
        </div>
    );
}
