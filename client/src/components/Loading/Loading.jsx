import "./Loading.css";
import spinner from "../../assets/Iphone-spinner-2.gif";


export function Loading() {
  return (
<div className="load-wrap">
  <img className="loader" src={spinner} />
</div>
  );

}
