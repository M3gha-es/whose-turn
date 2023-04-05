import React, {Component} from 'react';
import Toast from 'react-native-simple-toast';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    screen: 1,
    users: [],
    selected: '',
  };
  addUserHandler = user => {
    this.setState((prevState, props) => ({
      users: [...prevState.users, user],
    }));
  };

  removeUserHander = name => {
    this.setState((prevState, props) => ({
      users: this.state.users.filter(user => {
        return user !== name;
      }),
    }));
  };
  nextScreenHandler = () => {
    const {users} = this.state;
    if (users.length < 2) {
      Toast.showWithGravity(
        'You need  atleast two players for selection',
        Toast.LONG,
        Toast.TOP,
        {backgroundColor: '#F3D0CA'},
      );
    } else {
      this.setState(
        {
          screen: 2,
        },
        () => {
          this.findWinnerHandler();
        },
      );
    }
  };
  findWinnerHandler = () => {
    const winner_id = Math.floor(Math.random() * this.state.users.length);
    this.setState({
      selected: this.state.users[winner_id],
    });
  };

  resetGameHandler = () => {
    this.setState({
      screen: 1,
      users: [],
      selected: '',
    });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addUser: this.addUserHandler,
            removeUser: this.removeUserHander,
            nextScreen: this.nextScreenHandler,
            findWinner: this.findWinnerHandler,
            resetGame: this.resetGameHandler,
          }}>
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export {MyProvider, MyContext};
