import React from 'react';
/**
 * fargment : bo lop bao ngoai
 */
class Mycomponent extends React.Component {

        state = {
            firstName: 'Zen',
            lastName : 'Koi',
            name: "ZenKoi",
            age: 24,
        }    
        // handleOnChangeName = (event) => {
        //     this.setState({
        //         name: event.target.value
        //     })
        // } 
        // handleClickButton = () => {
        //     alert("Click me")
        //}

    render() {
        
        return (
            <>

        {/* <form >
        <label for="fname">First name:</label><br/>
        <input type="text"  value=""/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" value="Doe"/><br/><br/>
        <input type="submit" value="Submit"/>
        </form>  */}



            { console.log('My name is :',this.state.name ) }
            <div className='first'>
                <input value={this.state.name} type='text' 
                onChange={(event) => {this.handleOnChangeName(event)}}></input>
                Tui la {this.state.age} tuoi
            </div>
            <div className='second'> Today I'm sad . Myname is {this.state.name}</div>
            <div className='third'>
                <button onClick={() => this.handleClickButton()}>Click me</button>
            </div>
            </>

            
        )
    }
}
export default Mycomponent;