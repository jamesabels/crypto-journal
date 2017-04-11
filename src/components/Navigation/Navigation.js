import { Component, Link } from 'jumpsuit'

const Navigation = Component({
    render() {
        return (
            <div className='nav-wrap'>
                <ul className="nav-list">
                    {this.props.navList.map(function (item, index) {
                        return (
                            <li className="nav-item" key={`nav-item-${index}`}>
                                <Link to={`/`}>
                                    <i className={`tab-icon ${item.iconClass} `} />
                                    <p className={'tab-name'}>{item.label}</p>
                                </Link>
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