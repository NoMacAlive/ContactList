import React from 'react'
import axios from 'axios'
import style from '../css/contact.module.scss'
import {Popover, OverlayTrigger, Button, ButtonGroup} from 'react-bootstrap'



export default class Contact extends React.Component {

    constructor( ) {
        super()
        this.state={
            contacts: [],
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const contacts = res.data;
            this.setState({ contacts });
          })
      }


    render(){
        return <div className="container">
                {/* <ListGroup variant="ul" className="text-center">
                    { this.state.contacts.map(contact => <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>)}
                </ListGroup> */}

                {this.state.contacts.map((contact) =>  (
                    <div key={contact.id} className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <p className="card-text">    Email:{contact.email}                            </p>
                                    <p className="card-text">    Phone:{contact.phone}                            </p>
                                    <p className="card-text">    Username:{contact.username}                            </p>
                                    <p className="card-text">    Website:{contact.website}                            </p>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                <ButtonGroup vertical>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Title as="h3">{contact.company.name}</Popover.Title>
                                        <Popover.Content>
                                            <form>
                                                <div className="form-group row">
                                                    <label for="staticEmail" className="col-sm-6 col-form-label font-weight-bold">Bs</label>
                                                    <div className="col-sm-12">
                                                    <input type="text" readonly className="form-control-plaintext" id="bs" value={contact.company.bs}/>
                                                </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputPassword" className="col-sm-6 col-form-label font-weight-bold">Catch Phrase</label>
                                                    <div className="col-sm-12">
                                                    <input type="text" readonly className="form-control-plaintext" id="Catchphrase"  value={contact.company.catchPhrase}/>
                                                </div>
                                                </div>
                                            </form>
                                        </Popover.Content>
                                    </Popover>}>
                                        <Button variant="primary">Company</Button>
                                    </OverlayTrigger>
                                    {/* //address */}
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Title as="h3">Address</Popover.Title>
                                        <Popover.Content>
                                            <form>
                                                <div className="form-group row">
                                                    <label for="staticEmail" className="col-sm-6 col-form-label font-weight-bold">City</label>
                                                    <div className="col-sm-12">
                                                        <input type="text" readonly className="form-control-plaintext" id="bs" value={contact.address.city}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputPassword" className="col-sm-6 col-form-label font-weight-bold">Street</label>
                                                    <div className="col-sm-12">
                                                        <input type="text" readonly className="form-control-plaintext" id="Catchphrase"  value={contact.address.street}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputPassword" className="col-sm-6 col-form-label font-weight-bold">Suite</label>
                                                    <div className="col-sm-12">
                                                        <input type="text" readonly className="form-control-plaintext" id="Catchphrase"  value={contact.address.suite}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputPassword" className="col-sm-6 col-form-label font-weight-bold">ZipCode</label>
                                                    <div className="col-sm-12">
                                                        <input type="text" readonly className="form-control-plaintext" id="Catchphrase"  value={contact.address.zipcode}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputPassword" className="col-sm-6 col-form-label font-weight-bold">Geo</label>
                                                    <div className="col-sm-12">
                                                        <input type="text" readonly className="form-control-plaintext" id="Catchphrase"  value={"lat:"+contact.address.geo.lat+", "+"lng:"+contact.address.geo.lng}/>
                                                    </div>
                                                </div>
                                            </form>
                                        </Popover.Content>
                                    </Popover>}>
                                        <Button variant="secondary">Address</Button>
                                    </OverlayTrigger>
                                </ButtonGroup>

                                </div>
                            </div>

                          
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>))}

        </div>
    }

}