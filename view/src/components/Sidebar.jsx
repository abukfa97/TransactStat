import MenuOption from "./MenuOption.jsx";


const Sidebar = ({ option }) => {

    const menuOptions = [
        "Wallets" ,"Profile", "Settings", "Log Out"
    ]

    return (
        <div>
            <h2 className="logo">TransactStat</h2>
            <ul>
                {menuOptions.map((menuOption) =>
                    <li key={menuOption}>
                        {menuOption}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar