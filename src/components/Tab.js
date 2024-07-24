import { useState , useEffect } from "react"


function Tab ({children , activeTab}){

const [active , setactive] = useState(activeTab);


useEffect(() => {setactive(activeTab)
},[activeTab])


 return (
    <div>
        <nav>
            {children.map( (tab , index) =>
             <button 
             style={{ padding:15}}
             onClick={ () => setactive(index)}
            className={
            active === index ? 'bg-green-100': 'bg-gray-100'
            } key={index}>{tab.props.title}
            </button> )}
        </nav>
    {children[active]}
    </div>
 )
}

Tab.Panel = function({children , title}) {
    
    return (
        <div style={{padding: 4}}>{children}</div>
    )
}

export default Tab
