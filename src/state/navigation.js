import { State } from 'jumpsuit'

const navigationState = State('Navigation', {
    initial: {
        navList: [
            { iconClass: 'ion-briefcase', label: 'Portfolio' },
            { iconClass: 'ion-connection-bars', label: 'Simulation' },
            { iconClass: 'ion-pie-graph', label: 'Reports' },
            { iconClass: 'ion-gear-b', label: 'Settings' },
        ]
    },
    navigate(path) {
        console.log(path);
    }
});

export default navigationState;