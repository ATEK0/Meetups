import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useState, useEffect } from "react";
import QRCode from 'qrcode';


function MeetupItem(props) {
const [qrcodeFont, setSrc] = useState("");

useEffect(() => {
  QRCode.toDataURL(props.weblink).then((setSrc));
}, []);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <table className={classes.tabela}>
          <tr>
            <td className={classes.tabela_row1}>
              <div className={classes.content}>
                <h3>{props.content}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
              </div>
            </td>
            <td><img src={qrcodeFont} alt={"qrcode-" + props.title} /></td>
          </tr>
        </table>
        <div className={classes.actions}>
          <button>To favourites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
