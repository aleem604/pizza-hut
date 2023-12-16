import { useSelector } from "react-redux"

export default function Username() {
  var username = useSelector(state => {
    return state.user.username;
  });
  return (
    <div className="text-sm font-semibold">{username}</div>
  )
}
