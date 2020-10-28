import React, { Component } from 'react';
import './TodoApp.css';
import NewItem from './NewItem/NewItem';
import Items from './TodoAppItems/Items';
import EmptyItems from './EmptyItems/EmptyItems';
import Settings from './Settings/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import SteadyLogo from './Assets/logo.png';

class TodoApp extends Component {
    state = {
        items: [],
        newItemText: "",
        appName: "",
        appEmail: "",
        headerBg: "",
        toggleSettings: false
    }

    newItemInputHandler = event => {
        let text = this.state.newItemText;
        text = event.target.value;
        this.setState({
            newItemText: text
        });
    }

    addItemHandler = (event) => {
        event.preventDefault();
        if (this.state.newItemText !== "") {
            const newItem = {id: new Date().getTime(), text: this.state.newItemText, time: new Date(), done: false};
            const items = [...this.state.items, newItem];
            localStorage.setItem('items_stored', JSON.stringify(items));
            this.setState({
                items: items,
                newItemText: ""
            });
        }       
    }

    editItemHandler = id => {
        const itemIndex = this.state.items.findIndex(it => {
            return it.id === id
        });
        const item = {...this.state.items[itemIndex]};
        let newText = prompt("Edit item: ", item.text);
        item.text = newText ? newText : item.text;

        const items = [...this.state.items];
        items[itemIndex] = item
        
        localStorage.setItem("items_stored", JSON.stringify(items));
        this.setState({
            items: items
        });
    }

    deleteItemHandler = id => {
        const itemIndex = this.state.items.findIndex(it => {
            return it.id === id
        });
        const items = [...this.state.items];
        items.splice(itemIndex, 1);
        localStorage.setItem('items_stored', JSON.stringify(items));
        this.setState({items: items});
    }

    componentDidMount () {
        
        if ( localStorage.getItem('items_stored') ) {
            let storedItems = JSON.parse(localStorage.getItem('items_stored'));
            this.setState({
                items: storedItems
            });
        }

        if ( localStorage.getItem('app_name') ) {
            let app_name = localStorage.getItem('app_name');
            this.setState({
                appName: app_name
            });
        }

        if ( localStorage.getItem('app_email') ) {
            let app_email = localStorage.getItem('app_email');
            this.setState({
                appEmail: app_email
            });
        }

    }

    bgChangeHandler = event => {
        console.log(event)
    }

    checkBoxHandler = id => {
        const itemIndex = this.state.items.findIndex(it => {
            return it.id === id
        });
        const item = {...this.state.items[itemIndex]};
        item.done = !item.done
        const items = [...this.state.items];
        items[itemIndex] = item;
        localStorage.setItem('items_stored', JSON.stringify(items));
        this.setState({items: items});
    }

    toggleSettingsHandler = () => {
        let settingsStatus = this.state.toggleSettings;
        this.setState({toggleSettings: !settingsStatus});
    }

    setNameHandler = event => {
        let app_name = event.target.value;
        localStorage.setItem('app_name', app_name);
        this.setState({
            appName: app_name
        });
    }

    emailHandler = event => {
        let email = event.target.value;
        localStorage.setItem('app_email', email);
        this.setState({
            appEmail: email
        });
    }

    clearDataHandler = () => {
        localStorage.removeItem('items_stored');
        this.setState({
            items: []
        });
    }

    render () {
        let date = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        const logoStyle = {
            width: "40px"
        }

        date = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];
        let cardBodyContent = null;
        let bodyRendered = null;
        if ( this.state.items.length <= 0  ) {
            bodyRendered = <EmptyItems />
        } else {
            bodyRendered = (
                <ul className="todo-list success">
                    {this.state.items.map(item => {
                        return <Items 
                                    key={item.id} 
                                    done={item.done} 
                                    checkBox={() => this.checkBoxHandler(item.id)} 
                                    id={item.id} 
                                    text={item.text} 
                                    time={item.time}
                                    edit={() => this.editItemHandler(item.id)}
                                    delete={() => this.deleteItemHandler(item.id)}
                                />
                    })}
                </ul>
            );
        }

        if ( this.state.toggleSettings ) {
            cardBodyContent = <Settings changeBg={this.bgChangeHandler} dataLeft={this.state.items.length} changed={this.setNameHandler} value={this.state.appName} emailHandler={this.emailHandler} email={this.state.appEmail} clearData={this.clearDataHandler} />;
        } else {
            cardBodyContent = (
                <div>
                    <p className="badge badge-danger">
                        Items: {this.state.items.length}
                    </p>
                    {bodyRendered}
                </div>
            );
        }

        const faCogStyle = {
            cursor: "pointer"
        }
        return (
            <div className="container parent-container">
                <div className="todo-app card card-outline-success">
                    <div className="card-header">
                        <div className="float">
                            <h4 className="float-left"><img src={SteadyLogo} style={logoStyle} /> Steady</h4>
                            <h4 className="float-right"> <FontAwesomeIcon onClick={this.toggleSettingsHandler} style={faCogStyle} icon={faCog} color="#28a745" /> </h4>    
                        </div>
                        <div className="clearfix"></div>
                        <div className="float">
                            <p className="float-left">
                                {
                                    this.state.appName !== "" ? "Welcome,  @" + this.state.appName : <cite className="badge badge-light">New user? Open settings</cite>
                                }
                            </p>
                            <p className="float-right badge badge-light "> <cite>{date}</cite> </p>    
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {cardBodyContent}
                    </div>
                    <div className="card-footer">
                        <NewItem changed={this.newItemInputHandler} inputValue={this.state.newItemText} inputDisabled={this.state.toggleSettings} btnDisabled={this.state.newItemText !== "" ? false : true} addItem={this.addItemHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;
