import React from 'react'
import Navbar from './Navbar'
import AddIcon from '@material-ui/icons/Add';
import "./plan.css"
import "./responsive.css"
const Index = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row travelPlan">
                    <div className="img"></div>
                    <div className="planleft">
                        <div className="planleftContent">    
                            <h4>Travel Plans</h4>
                            <p>Please give in your travel plans to get  the cheapest ticket of</p>
                        </div>
                    </div>
                    </div>
                    <div className="row barlin">
                        <div className="barlinContent">
                            <h3>Berlin to Krakow</h3>
                            <div className="barlinInnerComponent">    
                                <p>3 Adults, 2 Children, 1 Infant EY </p>
                                <p className="group"><span className="item1">Agents</span> <span className="number"><strong>2</strong> </span><span className="item2">Offers starting</span> <span className="item3">$300</span></p>
                                <p className="group"><span className="item1">Others</span> <span className="number"><strong>137</strong> </span><span className="item2">Offers starting</span> <span className="item3">$351</span></p>
                            </div>
                        </div>
                        <div className="img barlinBg1"></div>
                    </div>
                    <div className="row barlin">
                        <div className="barlinContent">
                            <h3>Berlin to Rome</h3>
                            <div className="barlinInnerComponent">    
                                <p>2 Adults, 1 Children EY</p>
                                <p className="group"><span className="item1">Agents</span> <span className="number"><strong>5</strong> </span><span className="item2">Offers starting</span> <span className="item3">$23</span></p>
                                <p className="group"><span className="item1">Others</span> <span className="number"><strong>13</strong> </span><span className="item2">Offers starting</span> <span className="item3">$37</span></p>
                            </div>
                        </div>
                        <div className="img barlinBg2"></div>
                    </div>
                    <div className="row text-center ">
                        <p className="text-center w-100">
                            <button className="btn createBtn">
                                <span>Create New Plan</span>
                                <AddIcon/>
                            </button>
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Index
