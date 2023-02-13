import { Component } from "react";

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.gambar,
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p>
          <p>{this.state.datalist}</p>
        </center>
      </div>
    );
  }
}
export default ListMakanan;
