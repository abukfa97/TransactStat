import MenuOption from "./MenuOption.jsx";


const Sidebar = ({ option }) => {

    const menuOptions = [
        "Wallets" ,"Profile", "Settings", "Log Out"
    ]

    return (
        <div>
            <h2 className="logo">TransactStat</h2>
            <ul className='list-group'>
                {menuOptions.map((menuOption) =>
                    <li className='btn' key={menuOption}>
                        {menuOption}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar