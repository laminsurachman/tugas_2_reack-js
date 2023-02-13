import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tentang:
        "Warung Nusantara adalah warung yang berjualan makanan khas nusantara",
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p>
          <p>{this.state.Tentang}</p>
        </center>
      </div>
    );
  }
}
export default MenuTentangKami;
