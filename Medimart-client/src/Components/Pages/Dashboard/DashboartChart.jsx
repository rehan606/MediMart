// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line, AreaChart, Area } from "recharts";

// const DashboardChart = () => {
//   const [userData, setUserData] = useState({});
//   const [salesData, setSalesData] = useState([]);
//   const [ordersData, setOrdersData] = useState([]);
//   const [revenueData, setRevenueData] = useState([]);

//   useEffect(() => {
//     // 1. User Role Count
//     fetch("http://localhost:5000/user-role-count")
//       .then(res => res.json())
//       .then(data => {
//         setUserData(data);
//       });

//     // 2. Medicine Sales Overview
//     fetch("http://localhost:5000/sales-overview")
//       .then(res => res.json())
//       .then(data => setSalesData(data));

//     // 3. Monthly Orders
//     fetch("http://localhost:5000/monthly-orders")
//       .then(res => res.json())
//       .then(data => setOrdersData(data));

//     // 4. Monthly Revenue
//     fetch("http://localhost:5000/monthly-revenue")
//       .then(res => res.json())
//       .then(data => setRevenueData(data));
//   }, []);

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   const roleData = [
//     { name: 'Admin', value: userData.adminCount || 0 },
//     { name: 'Seller', value: userData.sellerCount || 0 },
//     { name: 'User', value: userData.userCount || 0 },
//   ];

//   return (
//     <div className="grid md:grid-cols-2 gap-6">
//       {/* Pie Chart - User Roles */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <h2 className="text-xl font-semibold mb-4">User Role Distribution</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie data={roleData} dataKey="value" nameKey="name" outerRadius={100} label>
//               {roleData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Bar Chart - Sales Overview */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <h2 className="text-xl font-semibold mb-4">Medicine Sales Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={salesData}>
//             <XAxis dataKey="medicine" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="count" fill="#00C49F" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Line Chart - Monthly Orders */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <h2 className="text-xl font-semibold mb-4">Monthly Orders</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={ordersData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="orders" stroke="#FF8042" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Area Chart - Monthly Revenue */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={revenueData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default DashboardChart;
