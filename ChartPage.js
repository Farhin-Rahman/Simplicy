import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function ChartPage() {
  const [chartName, setChartName] = useState('');
  const [chartType, setChartType] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [charts, setCharts] = useState([]);

  const handleChartNameChange = (e) => {
    setChartName(e.target.value);
    validateForm();
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(chartName !== '' && chartType !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const newChart = {
        name: chartName,
        type: chartType,
        data: generateRandomChartData(),
      };
      setCharts([...charts, newChart]);
      setChartName('');
      setChartType('');
    } else {
      console.error('Form is not valid. Please fill all required fields.');
    }
  };

  const generateRandomChartData = () => {
    // Replace this with your data generation logic based on chart type
    // For example, generate random data for a bar chart
    return {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Data Set 1',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  };

  return (
    <div className="chart-page">
      <h2>Create a New Chart</h2>
      <form onSubmit={handleSubmit}>{/* ... Form fields ... */}</form>

      <div className="chart-container">
        {charts.map((chart, index) => (
          <div className="chart" key={index}>
            {chart.type === 'bar' && <Bar data={chart.data} />}
            {chart.type === 'line' && <Line data={chart.data} />}
            {chart.type === 'pie' && <Pie data={chart.data} />}
            <p>{chart.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartPage;
