import React from 'react'

type DropDownProps = {
    name: string,
    icon: string,
    data: any
}
const DropDown: React.FC<DropDownProps> = ({ name, icon, data }) => {
    return (
        <div className="dropdown-container">
            <div className="dropdown-container-head">
                <div className="dropdown-container-icon">
                    {
                        icon && (
                            <img alt={icon} src={require(`../../assets/icons/${icon}.png`)} width={30} />
                        )
                    }
                </div>
                <div className="dropdown-container-body">
                    <div className="dropdown-container-body-name">
                        <span>{name}</span>
                        <span><img alt="arrow-dropdown" src={require('../../assets/icons/arrow.png')} width={20} /></span>
                    </div>
                </div>
            </div>
            <div className="dropdown-container-dropdown">
                    {
                        data.map((tag: any) => (
                            <span>{tag}</span>
                        ))
                    }
            </div>
        </div>
    )
}

export default DropDown