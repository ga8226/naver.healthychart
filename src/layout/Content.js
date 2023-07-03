import React from 'react'
import Banner from '../component/Banner'
import Contact from '../component/Contact'
import Interview from '../component/Interview'
import Portfolio from '../component/Portfolio'

const Content = (props)=> {
    
    return (

        <section id={props.cid}>
        
           <Banner></Banner>
           <Portfolio></Portfolio> 
           <Interview></Interview>
           <Contact></Contact>

         
        </section>
    )
}
export default Content