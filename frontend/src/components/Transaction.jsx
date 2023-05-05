const Transaction = ({name, amount}) => {
    return (
        < li>
            <div className='flex-between'>
                <span>{name}</span>
                <span className='red'>{amount}HUF</span>
            </div>
        </li>
    )
}

export default Transaction;