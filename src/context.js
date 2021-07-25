//Library imports
import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    moduleHeader: `<span></span>`,
    isHomeModule: true,
    isContactModule: false,
    headerId: "home",
  };

  getModuleHeader = (header, isHomeModule, headerId) => {
    this.setState(() => {
      return {
        moduleHeader: header,
        isHomeModule: isHomeModule,
        headerId: headerId,
      };
    });
  };

  getModuleInfoFooter = (isContactModule) => {
    this.setState(() => {
      return {
        isContactModule: isContactModule,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getModuleHeader: this.getModuleHeader,
          getModuleInfoFooter: this.getModuleInfoFooter,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
