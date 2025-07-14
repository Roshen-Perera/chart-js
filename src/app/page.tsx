"use client";


export default function Home() {
  // Fetch the diagnosis data
  // This is a placeholder; replace with actual data fetching logic
  const diagnosis = [
    {
      month: "January",
      year: 2023,
      blood_pressure: {
        systolic: { value: 120, levels: "normal" },
        diastolic: { value: 80, levels: "normal" },
      },
      heart_rate: { value: 70, levels: "normal" },
      respiratory_rate: { value: 16, levels: "normal" },
      temperature: { value: 98.6, levels: "normal" },
    },
    {      month: "February",
      year: 2023,
      blood_pressure: {
        systolic: { value: 125, levels: "elevated" },
        diastolic: { value: 85, levels: "elevated" },
      },
      heart_rate: { value: 72, levels: "normal" },
      respiratory_rate: { value: 18, levels: "normal" },
      temperature: { value: 98.7, levels: "normal" },
    },
    {      month: "March",
      year: 2023,
      blood_pressure: {
        systolic: { value: 130, levels: "high" },
        diastolic: { value: 90, levels: "high" },
      },
      heart_rate: { value: 75, levels: "normal" },
      respiratory_rate: { value: 20, levels: "normal" },
      temperature: { value: 99.0, levels: "normal" },
    },
  ];
  // Render the chart with the fetched data
  return (
    <div>
      <h1>Diagnosis Data</h1>
      <ul>
        {diagnosis.map((entry, index) => (
          <li key={index}>
            {entry.month} {entry.year}: Blood Pressure: {entry.blood_pressure.systolic.value}/{entry.blood_pressure.diastolic.value} ({entry.blood_pressure.systolic.levels}/{entry.blood_pressure.diastolic.levels}), Heart Rate: {entry.heart_rate.value} ({entry.heart_rate.levels}), Respiratory Rate: {entry.respiratory_rate.value} ({entry.respiratory_rate.levels}), Temperature: {entry.temperature.value}°F ({entry.temperature.levels})
          </li>
        ))}
      </ul>
    </div>
  );

}
