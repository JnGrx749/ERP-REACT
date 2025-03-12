import React from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import './Clientes.css';

export default function Cliente() {
    const data = {
        labels: ['Activos', 'Marketing', 'Potenciales', 'Inactivos', 'Perdidos', 'Ganados'],
        datasets: [
            {
                data: [100, 10, 20, 5, 5, 10],
                backgroundColor: ['#28a745', '#17a2b8', '#ffc107', '#6c757d', '#dc3545', '#007bff'],
            },
        ],
    };

    return (
        <div className="card flex justify-content-center">
            <Card 
                title="Resumen de Clientes" 
                className="shadow-3 p-3 border-round-lg" 
                style={{ maxWidth: '600px', backgroundColor: '#f8f9fa', color: '#343a40' }}
            >
                <div className="mt-4" style={{ height: '300px' }}> {/* Ajuste de altura similar a la otra gráfica */}
                    <Chart type="pie" data={data} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </Card>
        </div>
    );
}
