import React,{Component} from 'react' ;
import Card from './Card';
//make file name and class name same
//we have to export it before importing it somewhere
export default class First extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            users:[],
            filteredUsers:[]
        }
        this.formValues={};
    }

    // printAge(demo){
    //     console.log(this.props.age,demo);
    // }
    // printName(demo){
    //     console.log(demo,this.props.name);
    // }
    
    // changeEmail=()=>{
    //     this.setState({email:"stotious@gmail.com"});
    // }

    // readInputValue=(value)=>{
    //     console.log(value);
    // }

    readValue=(value,fieldName)=>{
        this.formValues[fieldName]=value;
        console.log(this.formValues);
    }

    searchByName=(name)=>{
        let tempUsers=this.state.users.filter((users)=>{
            return users.name.toLowerCase().includes(name.toLowerCase());
        })
        this.setState({filteredUsers:tempUsers});
    }

    searchByCity=(city)=>{
        let tempUsers=this.state.users.filter((users)=>{
            return users.address.city.toLowerCase().includes(city.toLowerCase());
        })
        this.setState({filteredUsers:tempUsers});
    }

    componentDidMount=()=>{

        // api n point it calls api fetch is bydefault async
        //POST request
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then((users)=>{
            this.setState({users:users});
            this.setState({filteredUsers:users});
            
        })
        .catch((err)=>{console.log(err)})

    }

     //all react component should have render function with return statement
     //where html is written
    render(){
        return(
            <div className="container">
                <div>
                    <input type="text" placeholder="Enter Name" onChange={
                    (event)=>{
                        this.readValue(event.target.value,"name")
                }}/>

                    <input type="text" placeholder="Enter Age" onChange={
                    (event)=>{
                        this.readValue(event.target.value,"age")
                }}/>
                </div>
                <div>
                <input type="search" placeholder="Search by Name" onChange={(event)=>{this.searchByName(event.target.value)}}/>
                <input type="search" placeholder="Search by City" onChange={(event)=>{this.searchByCity(event.target.value)}}/>                
                </div>
                {/* Two ways of calling a function  

                <button onClick={this.printName.bind(this,"My name is")}>Click name</button> 
                <h2>{this.props.name}</h2>
                <p>{this.state.email}</p>
                <button onClick={()=>{this.printAge(" years old")}}>Click age</button>  

                {/* taking input 
                <input type="text" placeholder="City" onChange={
                    (event)=>{
                        this.readInputValue(event.target.value)
                }}/>

                {/* CHange email 
                <button onClick={()=>{this.changeEmail()}}>Change Email</button>  
            */}
                {/* "?" will remove the error even if we dont get any data
                {this.state.users[0]?.name}*/}
                    {/* <table>
                    <thead>
                        <tr>
                            
                            <td>#</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Website</td>
                            <td>Email</td>
                            <td>Company</td>
                            <td>City</td>
                        </tr>
                           </thead>
                           <tbody>
                               {
                                   this.state.users.map((users,index)=>{
                                       return(
                                           <tr key={index}>
                                               <td>{index+1}</td>
                                               <td>{users.name}</td>
                                               <td>{users.username}</td>
                                               <td>{users.website}</td>
                                               <td>{users.email}</td>
                                               <td>{users.company.name}</td>
                                               <td>{users.address.city}</td>

                                           </tr>
                                       )
                                   })
                               }
                           </tbody>
                    </table> */}

                            {
                                  
                                // we give react a key to understand each element seperately
                                this.state.filteredUsers.map((users,index)=>{
                                    return(
                                          
                                        <Card users={users} key={index} />
                                    )
                                })
                            }
            </div>
        )

        }
}
