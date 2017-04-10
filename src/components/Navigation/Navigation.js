import { Component } from 'jumpsuit'

const Navigation = Component({
    render() {
        return (
            <div className='nav-wrap'>
                <ul className="nav-list">
                    {this.props.navList.map(function (item, index) {
                        return (
                            <li className="nav-item" key={`nav-item-${index}`}>
                                <i className={`tab-icon ${item.iconClass} `} />
                                <p className={'tab-name'}>{item.label}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}, (state) => {
    return {
        navList: state.navigationState.navList
    }
});

export default Navigation;