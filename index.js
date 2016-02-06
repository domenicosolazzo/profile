import React, {Component} from 'react'

export default class Profile extends Component{
   constructor(props){
     super(props);
   }

   render(){
     const {
       name,
       url,
       description
     } = this.props;

     return (
        <article>
          <div><a href="{url}">{name}</a></div>
          <div>{description}</div>
        </article>
     );
   }

}
