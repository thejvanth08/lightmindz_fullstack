import {
  LineChart,
  Line,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const moodLabels = ["Bad😖", "Bore😕", "Okay😑", "Good😊", "Happy😄"];

const MoodsChart = ({ moodsData }) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={moodsData}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <RechartsXAxis
          dataKey="timestamp"
        />
        <RechartsYAxis
          type="number"
          domain={[0, moodLabels.length - 1]}
          tickFormatter={(tick) => moodLabels[tick]}
          ticks={[0, 1, 2, 3, 4]}
        />
        <Tooltip formatter={(value) => moodLabels[value]} />
        <Legend />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MoodsChart;
