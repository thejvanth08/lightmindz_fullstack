import { useParams } from "react-router-dom"

const Test = () => {
  const { id } = useParams();

  return (
    <div>Test No: {id}</div>
  )
}
export default Test