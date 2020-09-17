import React, {Component} from "react";
import PropsTypes from "prop-types";


class MyComponent extends Component{
     static defaultProps ={
         name:'콩'
     };
     static PropsTypes ={
         name : PropsTypes.string,
         favoriteNumber : PropsTypes.number.isRequired
     }
    render(){
        const {name, favoriteNumber,children} = this.props;
            return (
              <div>
                안녕 {name} 하이!!
                <br />
                children = {children}
                <br />
                숫자는 {favoriteNumber}
              </div>
            );
          };
        };
          
         /*  MyComponent.defaultProps = {
            name: "콩",
          };
          
          MyComponent.PropsTypes = {
            name: PropsTypes.string,
            favoriteNumber:PropsTypes.number.isRequired
          };
         */
   


export default MyComponent;
