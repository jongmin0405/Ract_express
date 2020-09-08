import React,{Component} from 'react';

class Toc extends Component{
    shouldComponentUpdate(newProps, newState){
       //console.log('===>>>111',
      //this.props.data , newProps.data
     // ); 
     if(this.props.data === newProps.data){
     return false;
     };
    return true;
  }
    render(){

     
        var lists = [];
        var data = this.props.data;
        var i = 0;
       // console.log(data.length);
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a
                 href={"/content/"+data[i].id}
                 //리스트아이디 가져오기 1번방법
                 /* data-id={data[i].id}  //데이터셋에 값을 줄수 있음
                 onClick={function(e){
                   //  debugger;
                  e.preventDefault();
                  this.props.onChangPage(e.target.dataset.id);                  
                 }.bind(this)} */ 
                 
                 //리스트아이디 가져오기 2번방법
                 onClick={function(id,e){
                   //  debugger;
                  e.preventDefault();
                  this.props.onChangePage(id);                  
                 }.bind(this,data[i].id)}
                >{data[i].title}</a>
            </li>);
            i++
        }
      return(
      <nav>
            <ul>
                {lists}
            </ul>
      </nav>  
      );
    }
  }

export default Toc;  