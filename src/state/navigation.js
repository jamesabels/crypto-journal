import { State } from 'jumpsuit'

const navigationState = State('Navigation', {
    initial: {
        navList: [
            { iconClass: 'ion-briefcase', label: 'Portfolio', path:'/' },
            { iconClass: 'ion-connection-bars', label: 'Simulation', path:'/simulation' },
            { iconClass: 'ion-pie-graph', label: 'Reports', path:'/reports' },
            { iconClass: 'ion-gear-b', label: 'Settings', path:'/settings' },
        ]
    },
    navigate(path) {
        console.log(path);
    }
});

export default navigationState;