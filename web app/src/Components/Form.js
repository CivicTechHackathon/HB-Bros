import React, { Component } from 'react';
import firebase from '../Config/firebase'
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
//import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PersistentDrawerLeft from "./drawer";
//import OutlinedTextFields from "./inputs"
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            Beds: '',
            Doctors: '',
            VIPSuite: '',
            SingleDeluxeRoom: '',
            TwoBeddedRoom: '',
            FourBeddedRoom: '',
            IntensiveCareUnit: '',
            LabourandDeliverySuite: '',
            Nursery: '',
            IsolationRoom: '',
        }




        const styles = theme => ({
            container: {
              display: 'flex',
              flexWrap: 'wrap',
            },
            textField: {
              marginLeft: theme.spacing.unit,
              marginRight: theme.spacing.unit,
              width:50,
            },
            dense: {
              marginTop: 16,
            },
            menu: {
              width: 200,
            },
          });
    }
    Beds = (e) => {
        this.setState({ Beds: e.target.value })

    }

    Doctors = (e) => {

        this.setState({ Doctors: e.target.value })

    }

    VIPSuite = (e) => {

        this.setState({ VIPSuite: e.target.value })

    }

    SingleDeluxeRoom = (e) => {

        this.setState({ SingleDeluxeRoom: e.target.value })

    }

    TwoBeddedRoom = (e) => {

        this.setState({ TwoBeddedRoom: e.target.value })

    }

    FourBeddedRoom = (e) => {

        this.setState({ FourBeddedRoom: e.target.value })

    }

    IntensiveCareUnit = (e) => {

        this.setState({ IntensiveCareUnit: e.target.value })

    }

    LabourandDeliverySuite = (e) => {

        this.setState({ LabourandDeliverySuite: e.target.value })

    }

    Nursery = (e) => {

        this.setState({ Nursery: e.target.value })

    }

    IsolationRoom = (e) => {

        this.setState({ IsolationRoom: e.target.value })

    }


    updateBeds=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            BedsAvailible:this.state.Beds    
        })
    }

    updateDoctors=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            Doctors:this.state.Doctors    
        })
    }

    updateVIPSuite=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            VIPSuite:this.state.VIPSuite    
        })
    }

    updateSingleDeluxeRoome=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            SingleDeluxeRoom:this.state.SingleDeluxeRoom    
        })
    }
    
    updateTwoBeddedRoom=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            TwoBeddedRoom:this.state.TwoBeddedRoom    
        })
    }
    
    updateIntensiveCareUnit=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            IntensiveCareUnit:this.state.IntensiveCareUnit    
        })
    }

    updateFourBeddedRoom=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            FourBeddedRoom:this.state.FourBeddedRoom    
        })
    }

    updateIsolationRoom=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            IsolationRoom:this.state.IsolationRoom    
        })
    }

    updateLabourandDeliverySuite=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            LabourandDeliverySuite:this.state.LabourandDeliverySuite    
        })
    }

    updateNursery=()=>{
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).update({
            Nursery:this.state.Nursery    
        })
    }
    signout=()=>{
        firebase.auth().signOut();
        this.setState({user:false})
    }

    onSubmit = () => {
        const {
            Beds,
            Doctors,
            VIPSuite,
            SingleDeluxeRoom,
            TwoBeddedRoom,
            FourBeddedRoom,
            IntensiveCareUnit,
            LabourandDeliverySuite,
            Nursery,
            IsolationRoom } = this.state;
        firebase.database().ref('/Hospital Data').child(`${firebase.auth().currentUser.uid}`).set({

            BedsAvailible: Beds,
            Doctors: Doctors,
            VIPSuite: VIPSuite,
            SingleDeluxeRoom: SingleDeluxeRoom,
            TwoBeddedRoom: TwoBeddedRoom,
            FourBeddedRoom: FourBeddedRoom,
            IntensiveCareUnit: IntensiveCareUnit,
            LabourandDeliverySuite: LabourandDeliverySuite,
            Nursery: Nursery,
            IsolationRoom: IsolationRoom


        })
    }

    render() {
        const {
            Beds,
            Doctors,
            VIPSuite,
            SingleDeluxeRoom,
            TwoBeddedRoom,
            FourBeddedRoom,
            IntensiveCareUnit,
            LabourandDeliverySuite,
            Nursery,
            IsolationRoom } = this.state;
        return (
            <center>
            <FormControl>
                
<AppBar>
<Toolbar>
    
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              >
              <MenuIcon />
             <PersistentDrawerLeft ></PersistentDrawerLeft>
            </IconButton>
           
          </Toolbar>
           </AppBar>
                <div style={{ float: "left"}}>
                <br/>
                <br/>
                <br/>
                <br/>
                    <TextField type="number"  label="Availibility of beds  " name="Beds" id="beds" value={Beds} onChange={this.Beds} />
                    <Button onClick={this.updateBeds}>Update</Button>
                    <br/>
                </div>
                <br/>
                <div style={{ float: "right" }}>
                    
          
                    <TextField type="number" label="Availibility of Doctors " id="doctors" value={Doctors} onChange={this.Doctors} />
                    <Button onClick={this.updateDoctors}>Update</Button>
                    <br />
                 
                </div>
                <br/>
                <div style={{ float: "left" }}>
                    <TextField  type="number" label="VIP Suite" id="vipsuite" value={VIPSuite} onChange={this.VIPSuite} />
                    <Button  onClick={this.updateVIPSuite}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "right"}}>

                    <TextField  type="number" label="Single Deluxe Room" id="singleroom" value={SingleDeluxeRoom} onChange={this.SingleDeluxeRoom} />
                    <Button onClick={this.updateSingleDeluxeRoome}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "left" }}>

                    <TextField  type="number" label="Two-Bedded Room" id="twobeddedroom" value={TwoBeddedRoom} onChange={this.TwoBeddedRoom} />
                    <Button onClick={this.updateTwoBeddedRoom}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "right" }}>

                    <TextField  type="number" label="Four-Bedded Room" id="fourbeddedorom" value={FourBeddedRoom} onChange={this.FourBeddedRoom} />
                    <Button onClick={this.updateFourBeddedRoom}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "left" }}>

                    <TextField  type="number" label="Intensive Care Unit (ICU)" id="icu" value={IntensiveCareUnit} onChange={this.IntensiveCareUnit} />
                    <Button onClick={this.updateIntensiveCareUnit}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "right"}}>


                    <TextField  type="number" label="Isolation Room" id="isolationroom" value={IsolationRoom} onChange={this.IsolationRoom} />
                    <Button onClick={this.updateIsolationRoom}>Update</Button>
                </div>
                <br/>
                <div style={{ float: "left"}}>

                    <TextField  type="number" label="Labour and Delivery Suite" id="labouranddeliverysuite" value={LabourandDeliverySuite} onChange={this.LabourandDeliverySuite} />
                    <Button onClick={this.updateLabourandDeliverySuite}>Update</Button>
                    
                     </div>
                     <br/>                   
                     
                     <div style={{ float: "right" }}>

                        <TextField  type="number" label="Nursery" id="nursery" value={Nursery} onChange={this.Nursery} />
                        <Button onClick={this.updateNursery}>Update</Button>
                        <br />
                        <br />
                        </div>
                        <br/>
                        {Beds.length !== 0 &&
                            Doctors.length !== 0 &&
                            VIPSuite.length !== 0 &&
                            SingleDeluxeRoom.length !== 0 &&
                            TwoBeddedRoom.length !== 0 &&
                            FourBeddedRoom.length !== 0 &&
                            IntensiveCareUnit.length !== 0 &&
                            LabourandDeliverySuite.length !== 0 &&
                            Nursery.length !== 0 &&
                            IsolationRoom !== 0 &&
                            <Button onClick={this.onSubmit} > Submit </Button>}

                    </FormControl>
                    </center>
                    );
                }
            }
            
            export default Login;
