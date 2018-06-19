import React from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validUrl from 'valid-url';
import {crawlURL} from '../../actions/asynch_actions';
import Button from '@material-ui/core/Button'
import './form.css';


class  SeedURLForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error:null,
        }
    }

    //This HOC function creates form field with label and
    //it includes field error if there is any.
    renderField(field)
    {
         return(<div className="login-form-container">
                 <label>{field.label}</label>
                    <input className='inputclass' {...field.input} placeholder={field.label} type={field.type} />
                    <div>
                        {field.meta.touched &&
                        (field.meta.error && <span className="form-field-error">{field.meta.error}</span>)}
                    </div>
                </div>
         )
    }

    onSubmitHandler(values, dispatch, props){
        dispatch(crawlURL(values));
        props.reset();
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        return sleep(100)
    }

    render(){

        const {handleSubmit} = this.props;
        return(
            <div className='form-container'>
              <form onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}>
                  <Field name='url'  type='url' component={this.renderField} label='Seed URL' />
                  <Field name='depth'  type='number' component={this.renderField} label='Depth'/>
                  <Button type="submit" variant="contained">
                    Crawl
                  </Button>
                  <div className='form-error'>
                      {this.error?<span>*{this.error}</span>:null}
                  </div>
              </form>
            </div>
        );
    }
}

//This function performs the field validation
const validate = values => {

    const errors = {};

    if (!values.url) {
    errors.url = '*URL Required'
    }
    else if(!validUrl.is_uri(values.url)) {
      errors.url = '*Invalid URL'
    }

    return errors;
}

function mapStateToProps(store) {
    return {
        dispatch:store.dispatch,
        crawl_data:store.crawl_data,
    }
}


SeedURLForm = reduxForm({
  form: 'SeedURLForm',
  validate,
})(SeedURLForm);

export default connect(
     mapStateToProps,
)(SeedURLForm);