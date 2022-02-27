import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

import { graphData } from '../../mocks/data';
import addRandomDates from '../../utils/randomDates';
import randomNumbers from '../../utils/randomNumbers';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Filler,
    Tooltip,
);


const getChartOptions = (title, fill) => {
    return {
        responsive: true,
        layout:{
            padding:15
        },
        plugins: {
            filler: {
                propagate: false,
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
}
  
const getChartData = (labels, data, fill=false) => {
    return {
        labels,
        datasets: [
          {
            label: 'Dataset 2',
            data: [...data],
            fill: fill,
            backgroundColor: 'rgb(209, 172, 9)',
            borderColor: 'rgb(209, 172, 9)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          },
        ],
    };
};

const WidgetItem = (props) => {
    const renderItem = (type) => {
        switch(type) {
            case 'energy monitoring':
                return <EnergyContent />
            case 'generator monitoring':
                return <GeneratorContent />
            case 'structural monitoring':
                return <StructuralContent />
            case 'door monitoring':
                return <DoorContent />
            case 'temperature monitoring':
                return <TemperatureContent />
        }
    }
    return (
        <div className="widget-content">
            <div className="widget-title">
                {props.type} <span className="text-warning"> {props.activeTower['Cell Tower Name'] || "PJ0001" } </span>
            </div>

            <div className="widget-body">
                {renderItem(props.type)}
            </div>
        </div>
    )
};

const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

const CardNumber = ({ title, text }) => {
    return (
        <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-text">{text}</div>
        </div>
    )
};


// contet section
const EnergyContent = (props) => {
    let value = Math.ceil(Math.random() * 150) + 90;

    let hourlyValues = randomNumbers(10, 18, 12);
    let weeklyValues = randomNumbers(105, 180, 7);
    let monthlyValues = randomNumbers(3000, 5000, 12);

    console.log(hourlyValues);

    return(
        <div className="grid-card">
            <Card>
                <Line 
                    options={getChartOptions("Hourly Energy Usage")} 
                    data={
                        getChartData(
                            ['10:19', '12:19', '14:19', '15:09', '16:29', '16:50', '17:20', '18:30', "19:10", "20:30"],
                            [ ...hourlyValues ],
                            false
                        )
                    } 
                />
            </Card>
            <Card>
                <CardNumber 
                    title="Total Consumption Today"
                    text={`${value} kWh`}
                />
            </Card>
            <Card>
                {/*  */}
                <Bar 
                    options={getChartOptions("Weekly Energy Usage")} 
                    data={
                        getChartData(
                            ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            [...weeklyValues],
                            true
                        )
                    } 
                />
            </Card>

            <Card>
                <Line 
                    options={getChartOptions("Monthly Energy Usage")} 
                    data={
                        getChartData(
                            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            [...monthlyValues],
                            true
                        )
                    } 
                />
            </Card>
        </div>
    )
}

const TableSection = (props) => {
    return (
        <div className="table-section">
            <table className="table">
                <thead>
                    <tr>
                        <th>Time Stamp</th>
                        <th>{props.title || "Status" }</th>
                    </tr>
                </thead>
                <tbody>
                    { props.data.map((item, index)=> (
                        <tr key={index}>
                            <td>{item.label}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const GeneratorContent = (props) => {
    let data = addRandomDates(graphData.generator);
    data = data.map(item => {
        item['status'] = `${item['Status']} with ${item['Fuel Level']}% fuel level`;
        return item;
    });

    console.log(data);
    let index = Math.floor(Math.random() * 8);
    return(
        <div className="grid-card">
            <Card>
                <CardNumber 
                    title="Current Status"
                    text="ON"
                />
            </Card>

            <Card>
                <TableSection title="Status" data={data.slice(4,8)} />
            </Card>

            <Card>
                <CardNumber 
                    title="Full Level"
                    text={`${data[index]['Fuel Level']} %`}
                />
            </Card>
        </div>
    )
}

const StructuralContent = (props) => {
    let speeds = [...graphData.wind];
    let values = graphData.titltAngle.map(value => { return { value:value } });
    let data = addRandomDates(values);

    data = data.map((item, index) => {
        item['status'] = `${item['value']} ° with windspeed of  ${speeds[index]}% kts`;
        return item;
    });

    console.log(data);
    let index = Math.floor(Math.random() * 8);

    return(
        <div className="grid-card">
            <Card>
                <CardNumber 
                    title="Current Tilt Angle"
                    text={`${data[index].value}°`}
                />
            </Card>

            <Card>
                <TableSection title="Registered Tilt Angle" data={data.slice(2,8)} />
            </Card>

            <Card>
                <CardNumber 
                    title="Current Wind Speed"
                    text={`${speeds[index]} KTS`}
                />
            </Card>
        </div>
    )
}

const DoorContent = (props) => {
    let data = addRandomDates(graphData.door);
    data = data.map(item => {
        item['status'] = `Door ${item['Status']} ${item['Lock/Unlock']}`;
        return item;
    });

    console.log(data);

    return(
        <div className="grid-card">
            <Card>
                <CardNumber 
                    title="Current Status"
                    text="OPEN"
                />
            </Card>

            <Card>
                <TableSection title="Status" data={data.slice(0,6)}/>
            </Card>
            
            <Card>
                <CardNumber 
                    title="Lock Status"
                    text="UNLOCK"
                />
            </Card>
        </div>
    )
}

const TemperatureContent = (props) => {
    let data = graphData.temperature;
    data = data.map(val => {
        return {value:val}
    });

    data = addRandomDates(data);
    data.forEach(item => {
        item['status'] = `${item.value} °C`;
        return item;
    });


    // hourly values
    let tempValues = randomNumbers(28, 50, 9);

    return(
        <div className="grid-card">
            <Card>
                <CardNumber 
                    title="Cabin Door Status"
                    text="CLOSE"
                />
            </Card>

            <Card>
                <TableSection 
                    title="Temperature"
                    data={data.slice(0, 4)}
                />
            </Card>

            <Card>
                <CardNumber 
                    title="Temperature "
                    text="36 °C"
                />
            </Card>

            <Card>
            <Line 
                    options={getChartOptions("Temperature")} 
                    data={
                        getChartData(
                            ['01:00AM', '02:00AM', '03:00AM', '04:00AM', '05:00AM', '06:00AM', '07:00AM', '08:00AM', '09:00AM'],
                            [...tempValues],
                            false
                        )
                    } 
                />
            </Card>
        </div>
    )
}


export default WidgetItem;