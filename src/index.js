import { render } from 'melody-streams';
import './scss/index.scss';
import home from './main';

const documentRoot = document.getElementById('root');
render(documentRoot, home);
