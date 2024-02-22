# For layout you must pass the children

const DashBoardLayout ({ children}) => {
    return 
        <div>
            <h1>Dashboard</h1>
            <div>{children}</div>
        </div>
}

export default DashBoardLayout