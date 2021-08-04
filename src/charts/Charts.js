import React from 'react'
import BarChart from './Bar';
import PieChart from './Pie';

function Charts({caseData, country}) {
    return (
        <div>
            {country==="global"? <PieChart caseData={caseData} />: <BarChart caseData={caseData}  />}
        </div>
    )
}

export default Charts
