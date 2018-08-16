import React from 'react';
import { Consumer } from '../../context';

class Contact extends React.Component {
  state = {
    showInfo: true
  }

  onShowClick = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  onDeleteList = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {
          (value) => {
            const { dispatch } = value;
            return (
              <div className="card card-body mt-3">
                <div className="row p-2">
                  <h2>
                    {name}
                    <i className="ml-3 fas fa-caret-down" onClick={this.onShowClick}></i>
                  </h2>
                  <h4 className="ml-auto pr-3">
                    <i className="fas fa-trash text-danger"
                      onClick={this.onDeleteList.bind(this, id, dispatch)}>
                    </i>
                  </h4>
                </div>

                {
                  this.state.showInfo ? (
                    <ul className="list-group">
                      <li className="list-group-item">Email: {email}</li>
                      <li className="list-group-item">Phone number: {phone}</li>
                    </ul>
                  ) : (
                      undefined
                    )
                }
              </div>
            )
          }
        }
      </Consumer>

    )
  }
}

export default Contact;