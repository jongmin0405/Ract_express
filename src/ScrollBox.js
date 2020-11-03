import React, { Component } from 'react';

class ScrollBox extends Component {

    //scrollBottom 메서드 추가 -> App컴포넌트에서 ScrollBox에 ref를 달면 사용할 수 있다. 
    scrollToBottom = () => {
        //비구조화 할당 문법
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {

        const style = {
            border : '1px solid aqua',
            height: '300px',
            witdh: '30px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            witdh: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }

        return(
            <div 
                style = {style} 
                ref = {(ref) => {this.box=ref}}>
            <div
                style = {innerStyle}/></div>
        );
    }
}

export default ScrollBox;
