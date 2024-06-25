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

const ChatsChart = ({ chatsData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chatsData}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <RechartsXAxis dataKey="timestamp" />
        <RechartsYAxis dataKey="score" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default ChatsChart;
