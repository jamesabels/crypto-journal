import { Component, Actions, Link } from 'jumpsuit'
import numeral from 'numeral'

const Settings = Component({
    componentDidMount() {
    },
    componentDidUpdate() {
        // console.log(this.props.currentCoin)
    },
    render() {
        if (this.props.priceLoading && this.props.infoLoading && this.props.dataLoading ) {
            return (
                <h1>Loading!</h1>
            )
        }
        else {
            return (
                <div className='settings-wrap'>
                    <div className="settings-header">
                        <h1>Settings</h1>
                    </div>
                </div>
            )
        }
    }
}, (state) => {
    return {
    }
});

export default Settings;