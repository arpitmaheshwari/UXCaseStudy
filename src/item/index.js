import { createComponent } from 'melody-streams';
import template from './index.twig';
import './item.scss';

function Item({props}) {
    return props;
}

export default createComponent(Item, template);
