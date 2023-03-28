import { React, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getUid } from "../../firebase/auth-service";
import {getAllDynamicsStats} from "../../firebase/stats-service"

function Dynamics() {
    const [dyn, setDyn] = useState()
    
    useEffect(()=>{
      getUid().then(id=>getAllDynamicsStats(id).then(data=>setDyn(data.dynamicStat)))
    },[])
    if(dyn){
    let data = []
    let d_min = -1
    let d_max = -1
    for (const d in dyn){
        let date = Date.parse(d)
        d_min = d_min<0 ? date: Math.min(d_min, date)
        d_max = Math.max(d_max, date)
    }
    let d = d_min
    let v = 0
    while (d <= d_max+12*60*60*1000){
        let date = new Date(d)
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dateString  = `${year}-${month}-${day}`
        let s
        if (dateString in dyn){
            s = dyn[dateString] + v
            v = s
        } else {
            s = v
        }
        data.push({date: dateString, score: s})
        d += 24*60*60*1000
    }
    
    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 2 }} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      )} else {
        return <div>Loading...</div>
      }

}
export default Dynamics