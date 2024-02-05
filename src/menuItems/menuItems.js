import menuItemsCss from './menuItems.module.css'

import styled from 'styled'

export default function MenuItems(props) {
	return <>
    <li className={menuItemsCss.menuItems}>{props.item}</li>
    </>;
}
