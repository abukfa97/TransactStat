import MenuOption from "./MenuOption.jsx";


const Sidebar = ({ option }) => {
    return (
        <div>
            <h2 className="logo">TransactStat</h2>
            <MenuOption title="Settings"/>
            <MenuOption title="Wallets"/>
            <MenuOption title="Profile"/>
            <MenuOption title="Log Out"/>
        </div>
    )
}

export default Sidebar