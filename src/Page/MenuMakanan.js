import { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <p>Daptar Makanan yang disediakan </p>
        <td>
          <ListMakanan
            src="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            alt="gambar menu makanan"
            width="300"
          />
        </td>
        <td>
          <ListMakanan
            src="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            alt="gambar menu makanan"
            width="300"
          />
        </td>
        <td>
          <ListMakanan
            src="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            alt="gambar menu makanan"
            width="300"
          />
        </td>
      </div>
    );
  }
}
export default MenuMakanan;
