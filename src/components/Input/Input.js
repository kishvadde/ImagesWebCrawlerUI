import React from 'react';


const  styles = {
    padding:'10px',
    border: '1px black solid',
    borderRadius: '5px',
    margin:'2px'
}


class Input extends React.Component{

    constructor(props){
      super(props);
    }

    handleInputChange(event){
      const val = event.target.value;
      this.setState({
        value:val
      });
      this.props.onChage(val);
    }

      render(){
          const {type,name,placeholder} = this.props;
          return(
              <div>
                  <span>{name}</span>
                <input style={styles} className="inputclass" onChange={this.handleInputChange.bind(this)} placeholder={placeholder} type={type}/>
              </div>
        );
      }

}

export default Input;