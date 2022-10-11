import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statics = () => {
  const apiData = useLoaderData();
  const data = apiData.data;


  return (
    <div className="mt-5 pt-5">
      <h1>Statics page</h1>
      <div className="flex justify-center ">
        <BarChart width={365} height={500} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </div>
    </div>
  );
};

export default Statics;
