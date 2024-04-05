import React from 'react';
import {  Area, Bar, ComposedChart,RadialBarChart, RadialBar, Radar, PolarAngleAxis, PolarGrid, RadarChart, PolarRadiusAxis, LineChart, PieChart, Pie, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import stylecss from './Stats.module.css'
const Stats = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];
    const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
    ];

    const data1 = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];
    const data2 = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 8.63,
            pv: 3908,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: 'unknow',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ];
    const data3 = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    return (
        <>
            <div className='row g-2'>
                <div className='col-md-6 col-lg-4'>
                    <div className={`shadow rounded-2 ${stylecss.bgmain}`}>
                        <ResponsiveContainer width="100%" aspect={1/1}>
                            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data2}>
                                <RadialBar
                                    minAngle={15}
                                    label={{ position: 'insideStart', fill: '#fff' }}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                            </RadialBarChart>
                        </ResponsiveContainer>

                    </div>


                </div>
                <div className='col-md-6 col-lg-4'>
                 <div className={`shadow rounded-2 ${stylecss.bgmain}`}>
                    <ResponsiveContainer width="100%" aspect={1 / 1}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 40,
                                bottom: 20,
                                left: 20,
                              }}
                            
                        >
                            <CartesianGrid strokeDasharray="3 3"  stroke='#8884d8'/>
                            <XAxis dataKey="name" stroke="#8884d8"/>
                            <YAxis stroke="#82ca9d"/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                 </div>
                    

                </div>
                <div className='col-md-6 col-lg-4'>
                <div className={`shadow rounded-2 ${stylecss.bgmain}`}>
 <ResponsiveContainer width="100%" aspect={1/1}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" stroke="#4fa8c8"/>
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
</div>
                   

                </div>
                <div className='col-md-6 col-lg-4'>
                   
                    <div className={`shadow rounded-2 ${stylecss.bgmain}`}>
 <ResponsiveContainer width="100%" aspect={1/1}>
                        <PieChart width={400} height={400}
                        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
            </div>

                </div>
                <div className='col-md-6 col-lg-4'>
                   
                    <div className={`shadow rounded-2 ${stylecss.bgmain}`}>
                    <ResponsiveContainer width="100%" aspect={1/1}>
        <ComposedChart
          layout="vertical"
          data={data3}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" stroke="#8884d8"/>
          <YAxis dataKey="name" type="category" scale="band" stroke="#ff7300"/>
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>

            </div>

                </div>
                


            </div>

        </>
    )
}

export default Stats