

import './App.css';
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,Line,PieChart,Pie,Cell } from "recharts"
import Dashboard from './components/Dashborard';


const data = {
  salesVsOrders: [
    { date: '2024-02-01', sales: 100, orders: 50 },
    { date: '2024-02-02', sales: 120, orders: 60 },
    { date: '2024-02-03', sales: 90, orders: 45 },
    { date: '2024-02-04', sales: 110, orders: 55 },
    { date: '2024-02-05', sales: 130, orders: 65 }
  ],
  portionOfSales: [
    { store: 'WooCommerce Store', value: 60 },
    { store: 'Shopify Store', value: 40 },
  ]
};

const COLORS = ['#237074', '#dc6c38'];





function App() {
 
  return (
    <div className="App">
      <div className="dashboard">
        <h1 className="Header">Dashboard</h1>
        <ul className="ul">
          <li className="item a">Inventory</li>
          <li className="item b">Order</li>
          <li className="item c">Returns</li>
          <li className="item d">Customers</li>
          <li className="item e">Shipping</li>
          <li className="item f">Channel</li>
          <li className="item">Integartion</li>
          <li className="item">Calculators</li>
          <li className="item">Reports</li>
          <li className="item">Account</li>
        </ul>
    </div>    
     
      <div className="home-container">
     
        <div className="headers">
        <h1 className="home-header">
          Dashboard
        </h1>
        </div>
        <div className='display-container'>
        <div className="line-chart-container">
          <h1 className='chartHeading'>Sales vs Orders</h1>
         <ResponsiveContainer width="100%" height={350}>
        <LineChart width={730} height={250} data={data.salesVsOrders}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"   />
        <YAxis yAxisId="left" domain={[0, 1.6]} tickValues={[0, 0.4, 0.8, 1.2, 1.6]} tickFormatter={(value) => `${value}k`}/>

      <YAxis yAxisId="right" orientation="right" domain={[0, 4]} tickValues={[0, 1, 2, 3, 4]} />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/> 
        
        <Line type="monotone" dataKey="sales" stroke="#237074" fill="#237074" yAxisId="left" />
        <Line type="linear" dataKey="orders" stroke="#dc6c38" fill="#dc6c38" yAxisId="right" strokeWidth={1}/>
  
        </LineChart>
        </ResponsiveContainer> 

        </div>
        <div className="pie-chart-container">
        <h1 className='chartHeading'>Portion of Sales</h1>
        <PieChart width={400} height={500}>
         
        <Pie
          data={data.portionOfSales}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          nameKey="store"
        >
           
          {data.portionOfSales.map((entry, index) => (
           
            <Cell  key={`cell-${entry.store}`} fill={COLORS[index  % COLORS.length ]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend verticalAlign="bottom" height={40} wrapperStyle={{ marginTop: '50px' }} />
        
      </PieChart>
      </div>
      </div>
        </div>
       
    </div>
  );
}

export default App;
