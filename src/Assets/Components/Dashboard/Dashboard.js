import React from 'react'; 
import Cliente from '../Kpi/Clientes';
import Kpi2 from '../Kpi/Kpi2';
import Kpi3 from '../Kpi/Kpi3';
import Kpi4 from '../Kpi/Kpi4';


export default function Dashboard() {
    return (
               <>
        <h3>Dashboard</h3>
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Cliente/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Kpi2/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Kpi3/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Kpi4/>
            </div>
            </div>
        </div>
        </>

        
    )
}
        