import React from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: ''
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  onSubmitChange = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    if(name === '' || email === '' || phone === '') {
      this.setState(() => {
        return {
          error: 'Please fill the complete form'
        }
      })
    } else {
      this.setState(() => {
        return {
          name: '',
          email: '',
          phone: '',
          error: ''
        }
      })

      dispatch({ type: 'ADD_CONTACT', payload: newContact });
    }
  }

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {
          (value) => {
            const { dispatch } = value;
            return (
              <div className="card mb-3 mt-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  { error ? <p className="bg-danger text-white py-2 px-4">{error}</p> : '' }
                  <form
                    onSubmit={ this.onSubmitChange.bind(this, dispatch) }
                  >
                    <TextInputGroup
                      label='Name'
                      name='name'
                      placeholder='Enter Name...'
                      value={name}
                      onChange={this.onNameChange}
                    />
                    <TextInputGroup
                      type='email'
                      label='Email'
                      name='email'
                      placeholder='Enter Email...'
                      value={email}
                      onChange={this.onEmailChange}
                    />
                    <TextInputGroup
                      type='phone'
                      label='Phone'
                      name='phone'
                      placeholder='Enter Phone Number...'
                      value={phone}
                      onChange={this.onPhoneChange}
                    />
                    <input
                      type="submit"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            )
          }
        }
      </Consumer>

    )
  }
}

export default AddContact;