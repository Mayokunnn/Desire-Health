import { useParams } from "react-router-dom"

export default function Resource() {
  const {id} = useParams()
  return (
    <div>Resource {id}</div>
  )
}
