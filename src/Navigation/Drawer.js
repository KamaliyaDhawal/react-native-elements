import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

//screens
import Avatar from '../Screen/Avatar';
import Badge from '../Screen/Badge';
import Button from '../Screen/Button';
import ButtonGroup from '../Screen/ButtonGroup';
import Card from '../Screen/Card';
import CardListing from '../Screen/Listing-In-Card';
import CheckBox from '../Screen/CheckBox';

const screen = {
    Avatar: {
        screen: Avatar
    },
    Badge: {
        screen: Badge
    },
    Button: {
        screen: Button
    },
    ButtonGroup: {
        screen: ButtonGroup
    },
    Card: {
        screen: Card
    },
    CardListing: {
        screen: CardListing
    },
    CheckBox: {
        screen: CheckBox
    },
}

export default createAppContainer(createDrawerNavigator(screen));