import React, { Component } from "react";

class ListMenuUtama extends Component {
  render() {
    return (
      <div>
        <center>Selamat Datang diWarung Nusantara</center>
        <center>
          <img src={this.props.linkgambar} alt="warung Nusantara" width="600" />
        </center>
      </div>
    );
  }
}
export default ListMenuUtama;
