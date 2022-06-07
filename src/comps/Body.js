import './Body.css';

const Body = () =>{
    return(
        <div>
            <main className="BodyContainer">
                <div className='FarmOpsContainer'>
                    {/* Body Left - Options to CRUD */}
                </div>
                <div className='FarmSummaryContainer'>
                    {/* Body Center - Summary of farm */}
                </div>
                <div className='HerdSummaryContainer'>
                    {/* Body Right - Summary of herd */}
                </div>
                
                
                
            </main>
        </div>
    );
}

export default Body;